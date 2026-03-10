```js
// ============================================================
// JS ARCHITECTURE: THE POLL PHASE (PHASE 4)
// ============================================================
// 1. PRIMARY ROLE: Retrieve new I/O events and execute their
//    associated callbacks.
// 2. BLOCKING: This is the ONLY phase where the loop may
//    "sleep" (block) to wait for I/O if the queue is empty.
// 3. THE EXIT STRATEGY:
//    - If setImmediate exists -> Move to Check Phase.
//    - If Timers are ready -> Move back to Timers Phase.
// 4. EFFICIENCY: By waiting here, Node avoids "Busy Waiting,"
//    which keeps your CPU usage low when no data is moving.
// ============================================================
```
### ============================================================
*** The Poll Phase (The Main Event) ***
### ============================================================

This is where the "Single-Threaded" Node.js magic actually happens. 
The Poll Phase has two main responsibilities:

    Executing I/O callbacks that have finished.

    Calculating how long it should "sleep" 
    or block before moving to the next phase.

### ============================================================
1. The Decision Tree

When the Event Loop enters the Poll phase, it looks at the Poll Queue:

---> If the Queue is NOT Empty: 
 |-----> It executes the callbacks one by one (FIFO) 
 |       until the queue is empty 
 |-----> or a system-specific limit is reached.

---> If the Queue IS Empty:
 |-----> Scenario A: 
 |          If there are setImmediate() scripts waiting, 
 |          the loop ends the Poll phase and jumps to the Check Phase.
 |-----> Scenario B: 
            If there are NO setImmediate() scripts, 
            the loop will wait (block) 
            for callbacks to be added to the queue 
                (like an incoming network packet), 
                then execute them immediately.

### ============================================================
2. The "Waiting" Logic

How long does it wait? 
It checks the Timers Phase. 
If a timer is set to expire in 50ms, 
the Poll phase will wait at most 50ms 
for new I/O before circling back to the Timers phase.

Systems Analogy: 
    It’s like a watch -n command or a poll() system call in C. 
    It stays active but idle, 
    waiting for a file descriptor to change state so it can react.

### ============================================================
3. Why this matters to YOU

Because the Poll phase is where Node "sits," 

if you have a massive synchronous while loop in your code, 
you prevent the engine from ever reaching the Poll phase. 
This means your server can't accept new connections even if the OS is ready.
