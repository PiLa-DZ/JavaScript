
### ============================================================
1. Callback-Based (The "Old Guard")
These functions follow the Error-First Callback convention. 
They don't return anything useful; 
    they just "drop" the result into a function 
    whenever the Libuv thread pool finishes the work.

    Logic: 
        "Here is a function. 
        Call it when you're done. 
        I'll be over here."

    Problem: 
        You can't easily pass the "result" around. 
        You are stuck inside the nesting.
```js
// fs.readFile is the classic example
const fs = require('fs');

fs.readFile('/etc/hosts', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

### ============================================================
2. Promise-Based (The "Modern Standard")
These functions return an object immediately. 
Even if the file hasn't been read yet, 
you have a "handle" (the Promise) 
that you can pass to other functions, 
store in a variable, 
or return from an Express route.

    Logic: 
        "Give me a receipt (Promise) now. 
        I'll check its status later."

    Benefit: 
        Clean, 
        vertical chaining,
        built-in error propagation.
```js
// Modern Node.js uses the .promises namespace
const fs = require('fs').promises;

fs.readFile('/etc/hosts', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### ============================================================
```js
/*
=======================================================================
  Feature        | Callback-Based           | Promise-Based
=======================================================================
  Return Value   | undefined                | Promise object (Pending)
                 |                          |
 ----------------+--------------------------+--------------------------
  Error Handling | "(err, data) => { ... }" | .catch(err => { ... })
                 |                          |
 ----------------+--------------------------+--------------------------
  Composition    | Nested (Hell)            | Chained (Sequential)
                 |                          |
 ----------------+--------------------------+--------------------------
  Queue Type     | Macrotask (Poll Phase)   | Microtask (VIP Queue)
                 |                          |
 ----------------+--------------------------+--------------------------
  Control        | Inversion of Control     | Caller retains control
                 |                          |
=======================================================================
*/
```

### ============================================================
4. The "Bridge": Turning Callbacks into Promises

Since you are a Backend Developer, 
you will encounter old libraries that still use callbacks. 
You don't have to suffer! 
Node.js provides a built-in "Transformer" in the util module.

```js
const util = require('util');
const fs = require('fs');

// This turns a callback-function into a promise-function
const readFile = util.promisify(fs.readFile);

readFile('/etc/hostname')
  .then(data => console.log(data.toString()))
  .catch(err => console.error(err));
```

