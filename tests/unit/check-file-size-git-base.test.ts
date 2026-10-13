import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const gate = fileURLToPath(new URL("../../scripts/check/check-file-size.mjs", import.meta.url));

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "omniroute-file-size-base-"));
  const git = (...args: string[]) =>
    execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: "pipe" }).trim();
  const write = (file: string, content: string) => {
    mkdirSync(dirname(join(root, file)), { recursive: true });
    writeFileSync(join(root, file), content);
  };
  git("init", "--quiet");
  write("src/existing.ts", "// one\n// two\n// three\n// four\n// five\n");
  write("tests/existing.test.ts", "// one\n// two\n// three\n// four\n// five\n");
  write(
    "config/quality/file-size-baseline.json",
    JSON.stringify({
      cap: 4,
      frozen: { "src/existing.ts": 4 },
      testCap: 4,
      testFrozen: { "tests/existing.test.ts": 4 },
    })
  );
  git("add", ".");
  git(
    "-c",
    "user.name=Gate Test",
    "-c",
    "user.email=gate@example.invalid",
    "commit",
    "--quiet",
    "-m",
    "base"
  );
  const base = git("rev-parse", "HEAD");
  const run = (ref: string, ...args: string[]) =>
    spawnSync(process.execPath, [gate, "--base-ref", ref, ...args], {
      cwd: root,
      encoding: "utf8",
      timeout: 15000,
    });
  return {
    root,
    git,
    write,
    base,
    run,
    cleanup: () => rmSync(root, { recursive: true, force: true }),
  };
}

test("an unresolved base fails as incomplete evidence, without updating the baseline", () => {
  const f = fixture();
  try {
    f.write("src/existing.ts", "// small\n");
    f.write("tests/existing.test.ts", "// small\n");
    const baseline = join(f.root, "config/quality/file-size-baseline.json");
    const before = readFileSync(baseline, "utf8");
    const result = f.run("missing-quality-base", "--update");
    assert.equal(result.status, 2, result.stdout + result.stderr);
    assert.match(result.stderr, /base.*unavailable/i);
    assert.equal(readFileSync(baseline, "utf8"), before);
  } finally {
    f.cleanup();
  }
});

test("base-relative mode preserves inherited debt and rejects growth of source and tests", () => {
  const f = fixture();
  try {
    const unchanged = f.run(f.base);
    assert.equal(unchanged.status, 0, unchanged.stdout + unchanged.stderr);
    f.write("src/existing.ts", "// one\n// two\n// three\n// four\n// five\n// added\n");
    f.write("tests/existing.test.ts", "// one\n// two\n// three\n// four\n// five\n// added\n");
    const grown = f.run(f.base);
    assert.equal(grown.status, 1, grown.stdout + grown.stderr);
    assert.match(grown.stderr, /src\/existing\.ts: 7 > congelado 4/);
    assert.match(grown.stderr, /tests\/existing\.test\.ts: 7 > congelado 4/);
  } finally {
    f.cleanup();
  }
});

test("only absent paths are new, and new source and test files still obey their caps", () => {
  const f = fixture();
  try {
    f.write("src/new.ts", "// one\n");
    f.write("tests/new.test.ts", "// one\n");
    const small = f.run(f.base);
    assert.equal(small.status, 0, small.stdout + small.stderr);
    f.write("src/new.ts", "// one\n// two\n// three\n// four\n");
    f.write("tests/new.test.ts", "// one\n// two\n// three\n// four\n");
    const grown = f.run(f.base);
    assert.equal(grown.status, 1, grown.stdout + grown.stderr);
    assert.match(grown.stderr, /src\/new\.ts: 5 > cap 4/);
    assert.match(grown.stderr, /tests\/new\.test\.ts: 5 > cap 4/);
  } finally {
    f.cleanup();
  }
});

test("an unreadable committed blob is not classified as a new file", () => {
  const f = fixture();
  try {
    const oid = f.git("rev-parse", `${f.base}:src/existing.ts`);
    // This object belongs only to this test's disposable repository.
    rmSync(join(f.root, ".git", "objects", oid.slice(0, 2), oid.slice(2)));
    f.write("src/existing.ts", "// small\n");
    f.write("tests/existing.test.ts", "// small\n");
    const result = f.run(f.base);
    assert.equal(result.status, 2, result.stdout + result.stderr);
    assert.match(result.stderr, /base.*unavailable/i);
  } finally {
    f.cleanup();
  }
});

test("batch byte boundaries preserve UTF-8, CRLF, empty blobs and unusual path names", () => {
  const f = fixture();
  try {
    const name = process.platform === "win32" ? "src/ação [base].ts" : "src/ação\t[base]\n.ts";
    f.write(name, "// ação\r\n".repeat(5));
    f.write("src/empty.ts", "");
    f.write("src/duplicate.ts", "// ação\r\n".repeat(5));
    f.git("add", ".");
    f.git(
      "-c",
      "user.name=Gate Test",
      "-c",
      "user.email=gate@example.invalid",
      "commit",
      "--quiet",
      "-m",
      "paths"
    );
    const base = f.git("rev-parse", "HEAD");
    const unchanged = f.run(base);
    assert.equal(unchanged.status, 0, unchanged.stdout + unchanged.stderr);
    f.write(name, "// ação\r\n".repeat(6));
    const grown = f.run(base);
    assert.equal(grown.status, 1, grown.stdout + grown.stderr);
    assert.ok(grown.stderr.includes(`${name}: 7 > cap 4`), grown.stderr);
  } finally {
    f.cleanup();
  }
});

test("a base argument cannot be interpreted as a Git option", () => {
  const f = fixture();
  try {
    const result = f.run("--help");
    assert.equal(result.status, 2, result.stdout + result.stderr);
    assert.match(result.stderr, /base.*unavailable/i);
  } finally {
    f.cleanup();
  }
});

test("large committed blobs retain their base sizes across batch boundaries", () => {
  const f = fixture();
  try {
    for (let i = 0; i < 4; i++) {
      f.write(`src/large-${i}.ts`, (`// ${i}` + "x".repeat(640 * 1024) + "\n").repeat(5));
    }
    f.git("add", ".");
    f.git(
      "-c",
      "user.name=Gate Test",
      "-c",
      "user.email=gate@example.invalid",
      "commit",
      "--quiet",
      "-m",
      "large"
    );
    const base = f.git("rev-parse", "HEAD");
    const result = f.run(base);
    assert.equal(result.status, 0, result.stdout + result.stderr);
    f.write("src/large-0.ts", "// line\n".repeat(6));
    const grown = f.run(base);
    assert.equal(grown.status, 1, grown.stdout + grown.stderr);
    assert.match(grown.stderr, /src\/large-0\.ts: 7 > cap 4/);
  } finally {
    f.cleanup();
  }
});
