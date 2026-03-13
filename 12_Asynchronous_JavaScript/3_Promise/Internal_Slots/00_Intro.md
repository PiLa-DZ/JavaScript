
1. [[PromiseState]] (The Process Status)
2. [[PromiseResult]] (The Return Value) storage 
3. [[PromiseFulfillReactions]] Queues (lists of "Reaction" records). 
4. [[PromiseRejectReactions]] Queues (lists of "Reaction" records). 
5. [[PromiseIsHandled]] (The Safety Switch)

### ============================================================
Internal Slots. 
These are not accessible via your code 
(you can't console.log(promise.[[PromiseState]])), 

but they are how the V8 engine manages the Promise under the hood.

### ============================================================
1. [[PromiseState]] (The Process Status)

This is the "Lifecycle" variable. 
It tracks exactly where the Promise is in its journey.

Value: pending, fulfilled, or rejected.

Analogy: Like checking ps -aux to see if a process is R (Running), S (Sleeping), or Z (Zombie/Finished).

### ============================================================
2. [[PromiseResult]] (The Return Value) storage 
Pending   --> undefined
Fulfilled --> resolve(data)
Rejected  --> reject(error)

### ============================================================
3. [[PromiseFulfillReactions]] & [[PromiseRejectReactions]]

These are Queues (specifically, lists of "Reaction" records). 

When you call .then() or .catch(), you aren't running code yet; 
you are adding a "Reaction" to these internal lists.

FulfillReactions: A list of functions to run if the state moves to fulfilled.
RejectReactions:  A list of functions to run if the state moves to rejected.

Logic: 
    When the state changes, 
    V8 loops through the corresponding list 
    and pushes every function into the Microtask Queue.

### ============================================================
4. [[PromiseIsHandled]] (The Safety Switch)

This is a Boolean flag that V8 uses to track 
if you've added a .catch() or a rejection handler.

The "Unhandled Rejection" Error: 
    If a Promise moves to rejected 
    and this flag is false, 
    Node.js will scream at your terminal: 
        UnhandledPromiseRejectionWarning.

Logic: The moment you attach a .catch(), this flag flips to true.

### ============================================================
5. How it looks in "V8 Memory"
```js
// Imagine you run: 
const p = Promise.resolve("Arch"). 

// In V8's memory, the object p looks roughly like this:
// +---------------------------------------------------+
// |                  PROMISE OBJECT                   |
// +---------------------------------------------------+
// | [[PromiseState]]            : "fulfilled"         |
// | [[PromiseResult]]           : "Arch"              |
// | [[PromiseFulfillReactions]] : [] (already fired)  |
// | [[PromiseRejectReactions]]  : []                  |
// | [[PromiseIsHandled]]        : true                |
// +---------------------------------------------------+
```

### ============================================================
4. The async Debugging Tool: ndb
If you want to see the "Live" movement of Promises on Arch, don't just use console.log. Use ndb (Chrome-based debugger for Node).

```Bash
sudo npm install -g ndb
ndb your-script.js
```

It gives you a "Promises" pane that shows every active Promise in your system and its current state.
