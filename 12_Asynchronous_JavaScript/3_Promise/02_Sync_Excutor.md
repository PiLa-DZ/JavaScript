```js
const myPromise = new Promise((resolve, reject) => {
  console.log("Promise log");
});
console.log("Sync log");
// Promise log
// Sync log
```

### ============================================================
### 1. The Executor is Synchronous

When you call new Promise(...), 
the function you pass inside (called the executor) 
executes immediately. 
It is not pushed to a queue yet. 
Node.js treats the code inside that block 
just like any other standard line of code 
until it hits an asynchronous operation 
(like readFile or setTimeout).

### ============================================================
### 2. The Trace
1. Line 1:
    new Promise is called. The V8 engine enters the executor function.

2. Inside Executor: 
    It hits console.log("Promise log"). (Output 1)

3. Exit Executor: 
    The Promise object is created (it's currently in pending state).

4. Next Line: 
    It hits console.log("Sync log"). (Output 2)

### ============================================================
3. Where the "Async" Actually Happens

The "Asynchrony" only begins when you use .then() or .catch(). 
Even if you resolve() immediately, 
the .then() callback is what gets sent to the Microtask Queue.

Look at this comparison:
```js
const myPromise = new Promise((resolve, reject) => {
  console.log("1: Inside Executor (Sync)");
  resolve("3: Promise Resolved (Async)");
});

myPromise.then((data) => {
  console.log(data); // This goes to the Microtask Queue
});

console.log("2: Outside Promise (Sync)");
// 1: Inside Executor (Sync)
// 2: Outside Promise (Sync)
// 3: Promise Resolved (Async)
```

### ============================================================
4. Why is it designed this way?

The executor is synchronous 
so you can initialize your asynchronous task immediately. 
If the executor were async, 
there would be a delay before your database query 
or file read even started. 

By making the executor sync, 
Node ensures your I/O starts as fast as possible, 
while the response is handled later in the Microtask queue.
