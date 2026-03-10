
### ============================================================
1. new Promise (The Factory)

You use this when you are wrapping old-school asynchronous code 
(like fs.readFile or a network request) 
that doesn't support Promises natively. 
You are manually "piping" the success or failure.

    Role: The Producer.

    Context: 
        You have a callback-based task 
        that needs to be "Promisified."


```js
// > [!NOTE]
// > Not full example
// You are "constructing" the logic yourself
const myManualPromise = new Promise((resolve, reject) => {
  const data = readSystemLog(); // imagine this is a callback
  if (data) resolve(data);
  else reject("Log empty");
});
```

### ============================================================
2. Promise (The Utility Manager)

When you use Promise directly (without new), 
you are usually calling Static Methods 
like .resolve(), .reject(), or .all(). 

These are pre-built tools for managing data 
that is already in a Promise format 
or needs to be quickly turned into one.

    Role: The Orchestrator.

    Context: 
        You already have the value, 
        or you have multiple promises 
        you want to run at once.

```js
// You aren't building a new logic flow, 
// just wrapping a value
const fastPromise = Promise.resolve("Arch Linux");
```

### ============================================================
```js
/*
===========================================================================================
  Feature     | new Promise(...)                  | Promise.resolve(...)
===========================================================================================
  Constructor | Yes (Must use new)                | No (Static method)
 -------------+-----------------------------------+---------------------------------------
  Control     | You decide when to resolve/reject | It is resolved immediately
 -------------+-----------------------------------+---------------------------------------
  Executor    | Runs a function (sync)            | Returns a settled promise
 -------------+-----------------------------------+---------------------------------------
  Use Case    | "Wrapping setTimeout, fs, db"     | "Returning cached data, API consistency"
===========================================================================================
*/
```

### ============================================================
4. The "Under the Hood" Reality
Actually, Promise.resolve(value) 
is just "syntactic sugar" (a shortcut). 
Inside the V8 engine, it basically does this:
```js
// This:
Promise.resolve("data");

// Is essentially a shortcut for this:
new Promise((resolve) => resolve("data"));
```
