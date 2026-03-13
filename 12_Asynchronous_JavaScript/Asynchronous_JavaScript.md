```js
// ============================================================
// JS ARCHITECTURE: INTRODUCTION TO ASYNCHRONOUS JS
// ============================================================
// 1. CONCEPT: Executing long-running tasks without blocking
//    the main execution thread.
// 2. SYNCHRONOUS: Line-by-line execution. One "Process"
//    must finish before the next starts. (Blocking).
// 3. ASYNCHRONOUS: Initiate a task, provide a callback,
//    and keep moving. (Non-blocking).
// 4. THE ENGINE: Node.js uses 'libuv' and the Event Loop
//    to manage background I/O tasks.
// 5. IMPORTANCE: Essential for high-performance Node.js
//    backends (DB queries, API calls, File reads).
// ============================================================
```

### ============================================================
1. The "Blocking" Problem (Synchronous)

In synchronous code, 
every line is a "Stop" sign. 
The CPU must finish the current operation before moving to the next.

```js
"use strict";

console.log("1. Start Update");
// Imagine this takes 5 seconds to query the DB
const data = getDatabaseSync(); 
console.log("2. Data received:", data);
console.log("3. End Update");

// Result: The entire app hangs at line 5. 
// No other requests can be handled. System is unresponsive.
```

### ============================================================
2. The Asynchronous Solution

Asynchronous code allows Node.js to "delegate" heavy lifting 
(I/O, File System, Network) 
to the operating system kernel 
or the thread pool, 
and continue executing the rest of the script.

```js
"use strict";

console.log("1. Start Fetch");

// Non-blocking: We provide a "Callback" to run when finished
setTimeout(() => {
    console.log("2. Timeout Finished (After 2 seconds)");
}, 2000);

console.log("3. Script continues running...");

// OUTPUT:
// 1. Start Fetch
// 3. Script continues running...
// (2 seconds later)
// 2. Timeout Finished
```

### ============================================================
3. The 3 Pillars of Async JS

To master the backend, 
you need to learn these three stages of evolution in the JS ecosystem:

- Callbacks: The "Old Guard" (passing functions as arguments). Leads to "Callback Hell."

- Promises: The "Modern Standard" (a placeholder for a future value).

- Async/Await: The "Senior Standard" (Syntactic sugar that makes async look like sync).

### ============================================================
4. V8 Engine: The Event Loop

How does a single-threaded engine handle multiple things?

- The Call Stack: 
    Executes your code line-by-line.

- Web APIs / Node APIs: 
    Handles the heavy lifting (timers, fetch, fs).

- The Callback Queue: 
    Where finished tasks wait to get back onto the stack.

- The Event Loop: 
    The "Traffic Controller" 
    that moves tasks from the queue 
    to the stack only when the stack is empty.

