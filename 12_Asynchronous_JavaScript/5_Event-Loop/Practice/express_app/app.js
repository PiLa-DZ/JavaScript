import express from "express";
import fs from "fs";
import crypto from "crypto";

const app = express();

app.get("/lab", (req, res) => {
  console.log("\n--- [NEW REQUEST ARRIVED: POLL PHASE] ---");

  // 1. TIMERS PHASE (Phase 1)
  setTimeout(() => {
    console.log("[PHASE 1] setTimeout: Threshold met (50ms).");
  }, 50);

  // 2. PENDING CALLBACKS (Phase 2)
  // Hard to trigger manually, but usually handles TCP errors.

  // 4. POLL PHASE (Phase 4)
  fs.readFile("./package.json", () => {
    console.log("[PHASE 4] fs.readFile: I/O Callback executed.");

    // Inside I/O, setImmediate ALWAYS beats setTimeout
    setImmediate(() =>
      console.log("[PHASE 5] setImmediate: Nested inside I/O."),
    );
    setTimeout(
      () => console.log("[PHASE 1] setTimeout: Nested inside I/O."),
      0,
    );
  });

  // 5. CHECK PHASE (Phase 5)
  setImmediate(() => {
    console.log("[PHASE 5] setImmediate: Running right after Poll.");
  });

  // MICROTASKS (The "Interrupts")
  process.nextTick(() => {
    console.log("[MICROTASK] nextTick: The highest priority interrupt.");
  });

  Promise.resolve().then(() => {
    console.log("[MICROTASK] Promise: Runs after nextTick, before next phase.");
  });

  res.json({ status: "Experiments Queued" });
});

app.listen(3000, () => {
  console.log(`Lab Server active on port 3000`);
});
