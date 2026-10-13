import { execFileSync } from "node:child_process";

const BATCH_BYTES = 8 * 1024 * 1024;

// Resolve once so moving branch names cannot mix source and test baselines.
// Enumerate NUL-delimited paths, then read blobs by OID: spaces/newlines in
// filenames must never become batch protocol delimiters.
export function getBaseFileSizes(ref, files, cwd = process.cwd()) {
  const options = { cwd, timeout: 5000, stdio: ["pipe", "pipe", "pipe"] };
  const commit = execFileSync(
    "git",
    ["rev-parse", "--verify", "--end-of-options", `${ref}^{commit}`],
    { ...options, encoding: "utf8" }
  ).trim();
  if (!/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(commit)) {
    throw new Error("Invalid base commit identity");
  }
  const tree = execFileSync("git", ["ls-tree", "-r", "-l", "-z", "--full-tree", commit], {
    ...options,
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
  });
  const requested = new Set(files);
  const paths = new Map();
  const blobs = new Map();
  for (const record of tree.split("\0")) {
    if (!record) continue;
    const match = /^(\d+) (\S+) ([a-f0-9]+) +([\d-]+)\t([\s\S]+)$/.exec(record);
    if (!match) throw new Error("Invalid base tree record");
    const [, , type, oid, sizeText, file] = match;
    if (!requested.has(file)) continue;
    if (type !== "blob") throw new Error(`Base path is not a blob: ${file}`);
    const size = Number(sizeText);
    if (!Number.isSafeInteger(size) || size < 0) throw new Error("Invalid base blob size");
    paths.set(file, oid);
    blobs.set(oid, size);
  }

  const counts = new Map();
  function readBatch(batch, bytes) {
    const output = execFileSync("git", ["cat-file", "--batch"], {
      ...options,
      input: batch.map(([oid]) => oid).join("\n") + "\n",
      maxBuffer: bytes + batch.length * 128,
    });
    let cursor = 0;
    for (const [oid, size] of batch) {
      const headerEnd = output.indexOf(10, cursor);
      const header = output.subarray(cursor, headerEnd).toString("ascii");
      if (headerEnd < cursor || header !== `${oid} blob ${size}`) {
        throw new Error(`Incomplete base blob: ${oid}`);
      }
      const start = headerEnd + 1;
      const end = start + size;
      if (end >= output.length || output[end] !== 10) {
        throw new Error(`Truncated base blob: ${oid}`);
      }
      // Same convention as readFileSync(..., "utf8").split("\n").length,
      // including empty files, CRLF, UTF-8 and a final newline.
      let lines = 1;
      for (let i = start; i < end; i++) if (output[i] === 10) lines++;
      counts.set(oid, lines);
      cursor = end + 1;
    }
    if (cursor !== output.length) throw new Error("Unexpected base batch data");
  }

  let batch = [];
  let bytes = 0;
  for (const [oid, size] of blobs) {
    if (batch.length && bytes + size > BATCH_BYTES) {
      readBatch(batch, bytes);
      batch = [];
      bytes = 0;
    }
    batch.push([oid, size]);
    bytes += size;
  }
  if (batch.length) readBatch(batch, bytes);
  // Only paths absent from the successfully read tree count as new files.
  return Object.fromEntries([...paths].map(([file, oid]) => [file, counts.get(oid)]));
}
