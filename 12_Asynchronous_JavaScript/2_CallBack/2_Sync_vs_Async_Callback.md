```js
/*
===================================================================================
                  |                         |
  Feature         | Synchronous Callback    | Asynchronous Callback
 -----------------+-------------------------+--------------------------------------
  Execution       | Immediate (In-place)    | Deferred (Later)
  Call Stack      | Stays on the stack      | Moves to Queue -> Event Loop -> Stack
  Blocking        | Yes. Blocks next lines. | No. Script continues.
  Common Examples | "map, filter, forEach"  | "setTimeout, fs.readFile, https.get"
                  |                         |
===================================================================================
*/
```

### ============================================================
1. Synchronous Callbacks (Blocking)

These are executed immediately by the V8 Call Stack. 

They do not involve Libuv or the Event Loop. 

The "Host" function calls the callback before it even returns.

```js
const packages = ["linux", "vim", "tmux"];

// .forEach uses a SYNCHRONOUS callback
packages.forEach((pkg) => {
    console.log(` - Processing: ${pkg}`);
});

// OUTPUT: 1, - Processing..., 3
// (Everything happens in order. V8 is blocked until the loop ends.)
```

### ============================================================
2. Asynchronous Callbacks (Non-Blocking)

These are "scheduled." V8 hands the task to a Node API/Libuv, 

and the callback is placed in the Callback Queue. 

It will only run after the current script finishes 

and the Event Loop picks it up.

```js
console.log("1. Start Download");

// setTimeout uses an ASYNCHRONOUS callback
setTimeout(() => {
    console.log("2. Download Complete (Callback Executed)");
}, 0); // Even with 0ms, it is pushed to the queue!

console.log("3. Script continues...");

// OUTPUT: 1, 3, 2
// (V8 skips '2' and finishes the script first.)
```
