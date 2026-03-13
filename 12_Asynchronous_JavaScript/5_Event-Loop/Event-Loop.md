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
// VIP Lane
// [!] MICROTASKS: Run BETWEEN every single phase above.
//     - nextTick() -> Absolute priority.
//     - Promises   -> Secondary priority.
// ============================================================
```
### ============================================================
1. The "Infinite" Loop

The Event Loop isn't a magical cloud; 
it is a literal loop in the Libuv C code. 
Its only job is to check if there is any work to do 
and, if so, 
move that work onto the V8 Call Stack.

### ============================================================
2. The 6 Phases of the Event Loop

Contrary to popular belief, 
the Event Loop isn't just one "pile" of tasks. 
It moves through specific phases in a circle. 
Every time it finishes a full circle, 
that is called a Tick.

- 1. Timers: 
    Handles setTimeout() and setInterval().

- 2. Pending Callbacks: 
    Handles I/O callbacks 
    that were deferred from the previous loop iteration.

- 3. Idle, Prepare: 
    Internal use only (you’ll rarely touch this).

- 4. Poll: 
    The most important phase. 
    This is where Node retrieves new I/O events 
    (like an incoming HTTP request or a finished file read). 
    If the queue is empty, 
    Node might wait (block) here for a moment.

- 5. Check: 
    Handles setImmediate() callbacks.

- 6. Close Callbacks: 
    Handles close events, 
    like socket.on('close', ...).

### ============================================================
3. The "Microtask" VIP Lane

There is a secret "Fast Track" that lives between these phases. 
These are called Microtasks.

- Process.nextTick(): 
    The highest priority. 
    It runs immediately after the current operation, 
    before moving to the next phase.

- Promises (.then/await): 
    Run after the current operation 
    but before the next phase of the Event Loop.

- Systems Analogy: 
    If the Event Loop phases are Scheduled Cron Jobs, 
    Microtasks are Interrupt Signals. 
    They jump to the front of the line.

### ============================================================
4. How the "Swap" Happens

- 1. V8 Stack becomes empty.

- 2. Event Loop enters the Poll Phase.

- 3. It sees a finished fs.readFile callback waiting in the queue.

- 4. It "picks up" the callback and pushes it onto the V8 Stack.

- 5. V8 executes the JS. Once finished, the stack is empty again.

- 6. The loop moves to the Check Phase.

### ============================================================
### Best Practices for Working with the Event Loop

- Use Asynchronous Operations:  
    Avoid blocking the event loop with synchronous file reads or complex calculations.

- Optimize Long-Running Tasks:                    
    Use worker threads or child processes for CPU-intensive tasks.

- Use Microtasks Wisely:                           
    Since microtasks execute before other queued tasks, excessive usage can delay other operations.

- Leverage setImmediate() for High-Priority Tasks: 
    Unlike setTimeout(fn, 0), setImmediate() executes immediately after the I/O phase.

- Debug Using Performance Tools:                   
    Utilize Node.js Performance Hooks and the Chrome DevTools profiler to monitor the event loop behavior.

