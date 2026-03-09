### ============================================================
(Pending (Resolve, Reject))

Chaining Promises (.then.then.catch)

### ============================================================
Phase 1: The Three States
A Promise is an object 
that exists in one of three "System States" at any given time.
```js
/*
 ===============================================================
  State     | Systems Analogy | Description
 ===============================================================
  Pending   | RUNNING         | The I/O operation is still 
            |                 | in the Libuv thread pool.
 -----------+-----------------+---------------------------------
  Fulfilled | EXIT 0          | The operation finished 
            |                 | successfully. Data is ready.
 -----------+-----------------+---------------------------------
  Rejected  | EXIT 1          | "Something broke 
            |                 | (File not found, DB down)."
 ===============================================================
*/
```

### ============================================================
Phase 2: The Producer (Creating a Promise)

resolve (success) 
reject (failure).

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data Received! 🚀"); // Moves state to Fulfilled
  } else {
    reject("System Error! ❌");    // Moves state to Rejected
  }
});
```

### ============================================================
Phase 3: The Consumer (Using the Promise)

Once a Promise is created, 
it doesn't run on the main stack. 
It waits for the Microtask Queue. 
You "consume" it using .then() and .catch().

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data Received! 🚀"); // Moves state to Fulfilled
  } else {
    reject("System Error! ❌");    // Moves state to Rejected
  }
});

myPromise
  .then((data) => {
    console.log(data); // Runs if resolved
  })
  .catch((err) => {
    console.error(err); // Runs if rejected
  });
```

### ============================================================
Phase 4: Why this kills Callback Hell

The magic of Promises is Chaining. 
Instead of nesting functions horizontally, 
you return a new Promise inside a .then(), 
and the next .then() waits for it. 
It stays vertical.

```js
// Vertical Flow (Clean Neovim Buffer)
getFile()
  .then(data => parseData(data))
  .then(parsed => saveToDb(parsed))
  .then(() => console.log("Done!"))
  .catch(err => console.log("One error handler for the whole chain"));
```

### ============================================================
```js
// ============================================================
// JS ARCHITECTURE: PROMISES 101
// ============================================================
// 1. DEFINITION: An object representing the eventual
//    completion (or failure) of an async operation.
// 2. QUEUE: Promises live in the Microtask Queue (High
//    Priority) and execute after the current Macrotask.
// 3. IMMUTABILITY: Once a Promise is Resolved/Rejected,
//    its state CANNOT change. It is "Settled."
// 4. ARCH TIP: Use Promises to keep your code vertical
//    and your error handling centralized.
// ============================================================
```
