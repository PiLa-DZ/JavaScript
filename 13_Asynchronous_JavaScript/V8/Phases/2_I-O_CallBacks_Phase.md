```js
// ============================================================
// JS ARCHITECTURE: I/O (PENDING) CALLBACKS PHASE
// ============================================================
// 1. NAME: Formally called the 'Pending Callbacks' phase.
// 2. PURPOSE: To execute I/O callbacks that were deferred
//    from the previous loop iteration.
// 3. COMMON TASKS: Reporting system errors (like TCP
//    ECONNREFUSED) that occurred during I/O.
// 4. POSITION: Phase 2. It happens immediately after
//    Timers and before the engine starts "Polling" for new
//    system events.
// 5. SYSTEMS ANALOGY: Like checking 'dmesg' or log files
//    for errors that happened while you were busy running
//    another process.
// ============================================================
```
### ============================================================
*** I/O Callbacks Phase *** OR *** Pending Callbacks phase ***
### ============================================================
1. What exactly happens here?

Most "normal" I/O 
(like a successful file read or an incoming HTTP request) 
is handled in the Poll Phase. However, 
some system-level events are specifically 
reserved for this Pending/I/O Callbacks phase.

This phase executes callbacks for system operations such as:

- TCP Errors: 
    If a TCP socket receives an ECONNREFUSED (Connection Refused) 
    when attempting to connect, 
    the callback to report this error is queued here.

- Stream Cleanup: 
    Handling specific types of internal errors from low-level streams.

- Deferred I/O: 
    Any I/O callback that the Libuv engine decided 
    to postpone during the previous "Tick."

### ============================================================
2. Why do we need a separate phase for this?

Why not just handle everything in the Poll Phase?

Because Libuv needs a way to handle deferred errors 
without stalling the retrieval of new data. 
If a system operation fails at the kernel level, 
the notification might arrive at a time that is awkward for the Poll phase. 
Node.js parks these callbacks here to ensure they 
are handled at the start of the next cycle.

### ============================================================
3. The Execution Flow

The loop finishes the Timers Phase.

It clears any Microtasks (Promises/nextTick).

It enters the I/O Callbacks Phase.

It looks at its specific queue. 
    If a TCP socket failed to connect earlier, 
    that error callback is sitting here.

V8 executes the callback.

The loop moves toward the Idle/Prepare and Poll phases.

### ============================================================
5. Why you rarely "see" it

As a developer, 
you won't usually say "I want this to run in the I/O Callbacks phase." 
Node.js manages this internally. 
Your job is just to provide the error-handling logic in your callback:

```js
const net = require('net');

// If this connection is refused, the callback is queued 
// and executed during the I/O Callbacks Phase.
const client = net.connect({ port: 81 }, () => {
  console.log('Connected');
});

client.on('error', (err) => {
  console.error('[SYSTEM] Connection failed:', err.code); 
});
```
