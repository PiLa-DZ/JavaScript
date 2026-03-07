```js
// ============================================================
// JS ARCHITECTURE: THE 6 PHASES (THE HEARTBEAT)
// ============================================================
// [1] TIMERS:   Expired setTimeout/setInterval.
// [2] PENDING:  Specific system I/O errors.
// [3] IDLE:     Internal engine prep.
// [4] POLL:     Wait for new I/O (The "Waiting" Room).
// [5] CHECK:    setImmediate() callbacks.
// [6] CLOSE:    Socket/Handle cleanup.
// ------------------------------------------------------------
// [!] MICROTASKS: Run BETWEEN every single phase above.
//     - nextTick() -> Absolute priority.
//     - Promises   -> Secondary priority.
// ============================================================
```
