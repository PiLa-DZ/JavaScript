```js
// ============================================================
// JS ARCHITECTURE: THE TIMERS PHASE (PHASE 1)
// ============================================================
// 1. ROLE: Executes callbacks for setTimeout() and
//    setInterval() after their delay has passed.
// 2. PRECISION: Not guaranteed. It's a "Best Effort" execution
//    depending on when the Event Loop returns to Phase 1.
// 3. UNDER THE HOOD: Libuv maintains a min-heap to quickly
//    find the next timer that needs to expire.
// 4. BEHAVIOR: Node will drain the Timers Queue until it is
//    empty or until a system-defined execution limit is hit.
// 5. SYSTEMS ANALOGY: Like a 'cron' job with a very high
//    frequency check.
// ============================================================
```
### ============================================================
*** Timers Phase ***
### ============================================================
1. The Threshold Logic

The most important thing to understand is that 
the Timers Phase does not execute a callback 
at the exact millisecond you specify. 
It executes it the first time the Event Loop enters 
this phase after the time has expired.

If you set a timer for 100ms, 
but the Poll Phase is busy 
reading a massive database file for 200ms, 
your timer will wait at least 200ms.

### ============================================================
2. How the Queue Works

When you call setTimeout(cb, 100), 
Node doesn't put the callback in the queue immediately.

It hands the timer to Libuv.

Libuv keeps track of the time. 
Once 100ms has passed, 
Libuv marks the timer as "expired" 
and moves the callback into the Timers Phase Queue.

The next time the Event Loop circles back to the start, 
it enters the Timers Phase, 
sees the callback in the queue, 
and pushes it onto the V8 Call Stack.

### ============================================================
3. setTimeout(cb, 0) vs. setImmediate(cb)

This is a classic interview and architectural question.

### --------------------------------------------------------
setTimeout(cb, 0): Enqueues the task in the Timers Phase (Phase 1).

setImmediate(cb): Enqueues the task in the Check Phase (Phase 5).

### --------------------------------------------------------
Because the loop starts at Phase 1, 
you might think setTimeout always wins. 
However, 
if you are already inside an I/O callback (Phase 4), 
the loop moves to Phase 5 (setImmediate) before it loops back to Phase 1.
