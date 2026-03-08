```js
// ============================================================
// SYSTEMS LOGIC: SETTIMEOUT DEEP-DIVE
// ============================================================
// 1. DATA STRUCTURE: Libuv Min-Heap (O(1) access to
//    soonest timer).
// 2. THE 1MS LIMIT: 0ms is internally converted to 1ms,
//    explaining the non-deterministic "Race Condition."
// 3. UNREF: timer.unref() removes the timer from the
//    Event Loop's active reference count (allows exit).
// 4. DRIFT: setTimeout does NOT guarantee exact timing;
//    it guarantees the MINIMUM time before execution.
// ============================================================
```

### ============================================================
1. The Min-Heap (The Efficient Scheduler)
If you have 1,000 timeouts, 
Node doesn't check every single one in a loop. 
That would be O(n) 
and kill your CPU cycles. 
Instead, Libuv stores them in a Min-Heap data structure.
    Logic: 
        The timer with the soonest expiration is always at the top of the heap.
    Performance: 
        During the Timers Phase, 
        Libuv only looks at the top. 
        If the current time is less than the top timer's expiration, 
        it immediately moves to the next phase (O(1) check).

### ============================================================
2. The 1ms Floor & The "Zero" Myth
In Node.js, setTimeout(cb, 0) is a lie. 
If you look at the Node.js source code (timers.js), 
you'll see that any delay less than 1 is forced to 1.
```js
if (!(after >= 1 && after <= TIMEOUT_MAX)) {
  after = 1; // Any 0 or negative becomes 1ms
}
```
This is why setImmediate often wins
it doesn't have a 1ms technical debt; 
it's ready the moment the loop hits the Check Phase.

### ============================================================
3. "Refing" and "Unrefing" (Arch Power Tool)
you should know about .unref(). Normally, 
a setTimeout keeps your Node process alive.
```js
const timer = setTimeout(() => {
  console.log("This might never run");
}, 100000);

// Use unref() to allow the process to exit even if the timer is active
timer.unref();
```

### ============================================================
4. Recursive setTimeout vs. setInterval
never use setInterval for tasks that take time (like database polling).

setInterval Problem: 
    If the task takes longer than the interval, 
    the tasks "stack up" and can cause a memory heap overflow.

setTimeout Solution: 
    Call the next setTimeout after the work is done. 
    This ensures a constant "gap" between 
    executions, protecting your CPU cycles.

