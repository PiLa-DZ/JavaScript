```js
// ============================================================
// JS ARCHITECTURE: THE CHECK PHASE (PHASE 5)
// ============================================================
// 1. PURPOSE: Executes callbacks scheduled by setImmediate().
// 2. TRIGGER: Runs immediately after the Poll Phase is
//    completed or becomes idle.
// 3. I/O SAFETY: Inside an I/O callback, setImmediate will
//    ALWAYS execute before any expired timers.
// 4. QUEUE TYPE: FIFO (First-In-First-Out).
// 5. DESIGN GOAL: Allows users to run code as soon as the
//    Poll phase finishes, preventing I/O starvation.
// ============================================================
```
### ============================================================
*** Check Phase ***
### ============================================================
The Check Phase is the "Fast Track"
It only is job setImmediate()

### ============================================================
1. The setImmediate() Anchor

This phase exists specifically 
to execute callbacks scheduled via setImmediate().

The most important relationship to remember is: 
    Poll Phase --> Check Phase.
    If the Poll Phase becomes idle 
    and there are scripts queued in setImmediate(), 
    the Event Loop will not wait for more I/O. 
    It will immediately transition to the Check Phase to drain that queue.

### ============================================================
2. setImmediate vs. process.nextTick

This is where many developers get confused. Despite the names:

---> process.nextTick() 
        fires immediately after the current operation, 
        before the next phase of the loop.

---> setImmediate() 
        fires in the Check Phase (Phase 5 of the loop).

Systems Analogy: 
    nextTick is like a "Kernel Panic" or a "SIGKILL"
        it happens now. 
    setImmediate is like a "Systemd Timer"
        it happens as soon as the current cycle reaches the correct target.

### ============================================================
3. The "I/O Cycle" Guarantee

If you schedule a setImmediate inside an I/O callback (like fs.readFile), 
it is guaranteed to run before any setTimeout, 
regardless of how many timers are expired.

Why? 
Because after the Poll Phase (Phase 4), 
the loop naturally moves to the Check Phase (Phase 5) 
before it can circle back to the Timers Phase (Phase 1).
