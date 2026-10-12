// #16343 — the Docker/standalone launcher (scripts/dev/run-standalone.mjs) must apply the
// #5172 heap auto-calibration when OMNIROUTE_MEMORY_MB is unset or invalid, exactly as
// documented on calibrateHeapFallbackMb() ("Pass the result as the `fallback` of
// resolveMaxOldSpaceMb so an explicit OMNIROUTE_MEMORY_MB override always wins") and as
// `omniroute serve` already does. The existing precedence contracts (#2939 explicit
// OMNIROUTE_MEMORY_MB wins, #5238 an existing NODE_OPTIONS heap flag is kept, #10353
// conflict warning) must not regress.
//
// The launcher runs at import time, so it is exercised as a child process: cwd and
// DATA_DIR point at a throwaway directory holding a stub `server.js` that reports the
// NODE_OPTIONS it was spawned with.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir, totalmem } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { calibrateHeapFallbackMb } from "../../../scripts/build/runtime-env.mjs";

const launcherPath = fileURLToPath(
  new URL("../../../scripts/dev/run-standalone.mjs", import.meta.url)
);
const calibratedMb = calibrateHeapFallbackMb(totalmem());
// On hosts with < ~1.46 GB RAM the calibrated value equals the legacy 512 MB default, so
// the absent/invalid cases cannot tell the two apart.
const calibrationDistinguishable = calibratedMb !== 512;

function runLauncher(envOverrides) {
  const dir = mkdtempSync(join(tmpdir(), "omniroute-16343-"));
  try {
    writeFileSync(
      join(dir, "server.js"),
      "process.stdout.write('NODE_OPTIONS=' + (process.env.NODE_OPTIONS ?? '') + '\\n');\n"
    );
    const env = { ...process.env };
    delete env.OMNIROUTE_MEMORY_MB;
    delete env.NODE_OPTIONS;
    Object.assign(env, { DATA_DIR: join(dir, "data") }, envOverrides);
    const result = spawnSync(process.execPath, [launcherPath], {
      cwd: dir,
      env,
      encoding: "utf8",
      timeout: 60_000,
    });
    assert.equal(result.error, undefined, `launcher failed to run: ${result.error}`);
    assert.equal(result.status, 0, `launcher exited ${result.status}: ${result.stderr}`);
    const line = result.stdout.split(/\r?\n/).find((l) => l.startsWith("NODE_OPTIONS="));
    assert.ok(line, `stub server did not report NODE_OPTIONS; stdout=${result.stdout}`);
    const nodeOptions = line.slice("NODE_OPTIONS=".length);
    const flags = [...nodeOptions.matchAll(/--max-old-space-size=(\d+)/g)].map((m) => Number(m[1]));
    return { nodeOptions, flags, effectiveMb: flags.at(-1), stderr: result.stderr };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test(
  "#16343 unset OMNIROUTE_MEMORY_MB → launcher applies the calibrated heap fallback",
  { skip: !calibrationDistinguishable && "host RAM too small to distinguish 512 from calibrated" },
  () => {
    const run = runLauncher({});
    assert.equal(run.effectiveMb, calibratedMb, `NODE_OPTIONS=${run.nodeOptions}`);
    assert.doesNotMatch(run.stderr, /heap limit conflict/);
  }
);

test(
  "#16343 invalid OMNIROUTE_MEMORY_MB → launcher applies the calibrated heap fallback",
  { skip: !calibrationDistinguishable && "host RAM too small to distinguish 512 from calibrated" },
  () => {
    const run = runLauncher({ OMNIROUTE_MEMORY_MB: "not-a-number" });
    assert.equal(run.effectiveMb, calibratedMb, `NODE_OPTIONS=${run.nodeOptions}`);
    assert.doesNotMatch(run.stderr, /heap limit conflict/);
  }
);

test("#16343 guard: explicit valid OMNIROUTE_MEMORY_MB still wins over calibration", () => {
  const run = runLauncher({ OMNIROUTE_MEMORY_MB: "2048" });
  assert.equal(run.effectiveMb, 2048, `NODE_OPTIONS=${run.nodeOptions}`);
  assert.doesNotMatch(run.stderr, /heap limit conflict/);
});

test("#16343 guard: unset OMNIROUTE_MEMORY_MB keeps an existing NODE_OPTIONS heap (#5238)", () => {
  const run = runLauncher({ NODE_OPTIONS: "--max-old-space-size=8192" });
  assert.deepEqual(run.flags, [8192], `NODE_OPTIONS=${run.nodeOptions}`);
  assert.doesNotMatch(run.stderr, /heap limit conflict/);
});

test("#16343 guard: stock Docker env (both knobs = 1024) stays 1024 with no warning", () => {
  const run = runLauncher({
    OMNIROUTE_MEMORY_MB: "1024",
    NODE_OPTIONS: "--max-old-space-size=1024",
  });
  assert.equal(run.effectiveMb, 1024, `NODE_OPTIONS=${run.nodeOptions}`);
  assert.doesNotMatch(run.stderr, /heap limit conflict/);
});

test("#16343 guard: disagreeing knobs still warn and OMNIROUTE_MEMORY_MB wins (#10353)", () => {
  const run = runLauncher({
    OMNIROUTE_MEMORY_MB: "2048",
    NODE_OPTIONS: "--max-old-space-size=512",
  });
  assert.equal(run.effectiveMb, 2048, `NODE_OPTIONS=${run.nodeOptions}`);
  assert.match(run.stderr, /heap limit conflict/);
});
