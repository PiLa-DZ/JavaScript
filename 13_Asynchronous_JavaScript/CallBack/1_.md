1. The Basic Mechanism
2. The "Error-First" Pattern (Node.js Standard)
3. Callback Hell (The Pyramid of Doom)

### ============================================================
1. The Basic Mechanism

A callback is simply a function passed as an argument to another function. 
It doesn't run immediately; 
    it waits for the "Host" function to finish its task 
        (like an I/O operation in Libuv) 
    and then calls it back.

```js
"use strict";

// The Host function
function kernelUpdate(package_name, callback) {
    console.log(`[PACMAN] Updating ${package_name}...`);
    
    // Simulating an Async I/O task
    setTimeout(() => {
        console.log(`[PACMAN] ${package_name} update complete.`);
        callback(); // THE CALLBACK: "Signal the boss we are done"
    }, 2000);
}

// Usage
kernelUpdate("linux-lts", () => {
    console.log("[SYSTEM] Rebooting for new kernel...");
});
```

### ============================================================
2. The "Error-First" Pattern (Node.js Standard)

In the Node.js backend world, 
we have a strict convention for callbacks to handle the "Dual-Engine" reality. 

Since the "Boss" (V8) isn't there when the "Worker" (Libuv) finishes, 
we need a way to report if something went wrong.

The Rule: 
    The first argument is always the error object. 
    If there's no error, 
    it's null.

```js
const fs = require('fs');

fs.readFile('/etc/hostname', 'utf8', (err, data) => {
    if (err) {
        console.error("[ERROR] Failed to read file:", err.message);
        return;
    }
    console.log("[SYSTEM] Hostname is:", data.trim());
});
```

### ============================================================
3. Callback Hell (The Pyramid of Doom)

This is why we eventually moved to Promises. 
When you have multiple async tasks that depend on each other, 
your code starts crawling to the right of your terminal. 
It becomes a maintenance nightmare.

```js
// Example of Callback Hell in a Backend flow
db.connect((err) => {
    if (!err) {
        db.query("SELECT * FROM users", (err, users) => {
            if (!err) {
                fs.writeFile("users.json", JSON.stringify(users), (err) => {
                    if (!err) {
                        console.log("Success! (But look at this mess)");
                    }
                });
            }
        });
    }
});
```


```js
// ============================================================
// JS ARCHITECTURE: CALLBACKS (THE MESSENGERS)
// ============================================================
// 1. DEFINITION: A function passed into another function
//    to be executed once an asynchronous task completes.
// 2. NON-BLOCKING: The main V8 thread continues while the
//    callback waits in the Libuv queue.
// 3. ERROR-FIRST: Node.js standard is (err, data) => { ... }.
//    Always check 'err' before processing 'data'.
// 4. THE LIMITATION: "Callback Hell." Difficult to read,
//    debug, and handle errors across multiple nested steps.
// 5. SYSTEMS ANALOGY: Like an 'on_exit' hook for a
//    backgrounded process.
// ============================================================
```
