```js
// ============================================================
// JS ARCHITECTURE: IDLE / PREPARE (PHASE 3)
// ============================================================
// 1. ACCESS: Internal Only. No Public Node.js API exists
//    to enqueue tasks here.
// 2. IDLE: Performs repetitive internal tasks for Libuv.
// 3. PREPARE: Synchronizes the internal state before the
//    Event Loop enters the "Poll" phase (Blocking I/O).
// 4. SIGNIFICANCE: Ensures that the transition from JS
//    execution to OS system calls is stable and optimized.
// 5. SYSTEMS ANALOGY: Like a 'pre-exec' hook in a shell
//    script or a kernel context switch preparation.
// ============================================================
```
### ============================================================
*** Idle/Prepare Phase ***
### ============================================================

This is the most "mysterious" phase 
because you cannot write code that runs here. 
It is strictly for the internal coordination between V8 and Libuv.

### ============================================================
1. What is the difference between Idle and Prepare?

Though they happen back-to-back, 
they serve two distinct "under the hood" purposes for the engine:

    Idle Phase: 
        Despite the name, the CPU isn't doing "nothing." 
        This phase runs on every single tick 
        if the event loop is active. 
        It's used by Libuv to handle internal operations 
        that need to happen constantly while the loop is running.

    Prepare Phase: 
        This phase is used specifically 
        to get the system ready for the Poll Phase. 
        It sets up the internal data structures 
        that will be used to wait for I/O.

### ============================================================
2. Why can't we use it?

Node.js does not expose an API (like setTimeout or setImmediate) 
to inject callbacks into these queues. 
If we could, 
we might accidentally break the synchronization 
between the JS engine and the C++ OS bindings.

Think of it like Ring 0 vs Ring 3 permissions in Linux. 
Your JS code lives in user-land (Ring 3), 
while the Idle/Prepare phase is the runtime's internal "System Land."

### ============================================================
3. The "Pre-Poll" Checklist

The Prepare phase is essentially a "checklist" the engine runs through:

    Are we about to block for I/O?

    Is the internal state of the file descriptors updated?

    Is V8's garbage collector finished with urgent business?

Once the engine is satisfied, 
it moves to the Poll Phase, where the real heavy lifting begins.


