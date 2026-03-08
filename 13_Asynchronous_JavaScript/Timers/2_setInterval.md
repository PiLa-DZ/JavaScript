```js
// ============================================================
// SYSTEMS LOGIC: SETINTERVAL (THE HEARTBEAT)
// ============================================================
// 1. BEHAVIOR: Automatically re-adds itself to the Libuv
//    Min-Heap after every execution.
// 2. THE DANGER: Does not wait for the previous callback
//    to finish. Can lead to "Task Stacking."
// 3. DRIFT: In a busy Event Loop, the interval will
//    "drift" because it must wait for the Poll phase to
//    become idle.
// 4. ARCH BEST PRACTICE: For backend major tasks (crawlers,
//    DB cleanup), use recursive setTimeout to ensure
//    sequential execution and avoid CPU spikes.
// ============================================================
```

### ============================================================
1. The Internal Logic: "The Ticking Clock"
When you call setInterval(fn, 1000), 
Libuv doesn't just run it once. 
It calculates the next_expiry by adding the delay to the current_time. 
Once the timer fires, 
it automatically re-schedules itself for current_time + delay.

### ============================================================
2. The "Execution Gap" Problem
This is the most dangerous part of setInterval for a Backend Developer. 
If your callback takes long CPU cycles 
or involves slow I/O, you can encounter "Task Overlap."

The Scenario: 
    You set an interval for 100ms, 
    but your database query takes 150ms.

The Result: 
    The Event Loop will trigger the next interval immediately 
    after the first one finishes 
    because the "expiry time" has already passed. 
    This leads to Queue Saturation 
    and can eventually lead to an OOM (Out of Memory) crash.

### ============================================================
3. setInterval vs. Recursive setTimeout
this comparison is essential for building scalable Node.js services.

```js
/*
=========================================================================================================
  Feature       | setInterval                      | Recursive setTimeout
 ---------------+----------------------------------+----------------------------------------------------
  Timing        | Fixed frequency (attempts to be) | Fixed delay between tasks
  Safety        | Risky (Tasks can stack up)       | Safe (Next task only scheduled after completion)
  Drift         | Accumulated drift                | Sequential drift
  Best Use Case | Lightweight UI updates           | Heavy Background/Database tasks
=========================================================================================================
*/
```

### ============================================================
4. The "Stop" Mechanism: clearInterval

Just like setTimeout, setInterval returns a Timeout Object. 
To stop the "heartbeat," 
you must pass that object to clearInterval.

if you forget to clear an interval in an Express app, 
you have a Memory Leak. 
The interval will keep running even 
after the user disconnects, slowly eating up your RAM.

```js
const heartbeat = setInterval(() => {
  console.log("Ping...");
}, 1000);

// Later...
clearInterval(heartbeat);
```

