/**
 * Gate tests for the shared deferred write retry.
 *
 * The lock predicate accepts every lock shape and rejects any other error.
 * The generic scheduler runs the deferred task once after the delay,
 * reports a second failure through the abandon callback, and never chains
 * a third run. The usage entry point keeps its deferred single retry; its
 * write gates live with the usage writer and return at rebase.
 */

import { test } from "node:test";
import assert from "node:assert/strict";

// ── predicate ────────────────────────────────────────────────────────────────

test("write lock predicate accepts lock shapes and rejects other errors", async () => {
  const { isWriteLockError } = await import("../../../src/lib/usage/usageWriteRetry.ts");
  assert.equal(isWriteLockError(new Error("database is locked")), true);
  assert.equal(isWriteLockError(new Error("database table is locked")), true);
  assert.equal(isWriteLockError(new Error("database schema is locked")), true);
  assert.equal(isWriteLockError(new Error("database is busy")), true);
  assert.equal(isWriteLockError({ code: "SQLITE_BUSY" }), true);
  assert.equal(isWriteLockError({ code: "SQLITE_LOCKED" }), true);
  assert.equal(isWriteLockError({ errcode: 5 }), true);
  assert.equal(isWriteLockError({ errcode: 6 }), true);
  assert.equal(isWriteLockError({ errcode: 0x0505 }), true);
  assert.equal(isWriteLockError("database is locked"), true);
  assert.equal(isWriteLockError(new Error("UNIQUE constraint failed: usage_history.id")), false);
  assert.equal(isWriteLockError(new Error("no such table: usage_history")), false);
});

// ── generic scheduler: deferred task runs once, failure reported, never chained ──

test("generic retry runs the deferred task once after the delay", async () => {
  const { scheduleWriteRetry } = await import("../../../src/lib/usage/usageWriteRetry.ts");
  let calls = 0;
  let failures = 0;
  await scheduleWriteRetry(
    () => {
      calls++;
    },
    () => {
      failures++;
    }
  );
  assert.equal(calls, 1);
  assert.equal(failures, 0);
});

test("generic retry reports the second failure and never chains a third run", async () => {
  const { scheduleWriteRetry } = await import("../../../src/lib/usage/usageWriteRetry.ts");
  let calls = 0;
  const seen: unknown[] = [];
  const failing = () => {
    calls++;
    throw new Error("database is locked");
  };
  await scheduleWriteRetry(failing, (err) => {
    seen.push(err);
  });
  assert.equal(calls, 1);
  assert.equal(seen.length, 1);
  assert.match(String((seen[0] as Error)?.message ?? seen[0]), /database is locked/);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  assert.equal(calls, 1);
  assert.equal(seen.length, 1);
});
