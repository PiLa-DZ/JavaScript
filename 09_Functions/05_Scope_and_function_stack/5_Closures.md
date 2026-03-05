```js
// ============================================================
// Closures
// ============================================================
// 1. Definition: A function + its bundled lexical environment.
// 2. Persistence: Inner functions keep outer variables alive 
//    after the outer function returns.
// 3. Privacy: Used to emulate private variables (Encapsulation).
// 4. Memory: Be careful! Closures stay in memory as long as 
//    the inner function exists.
// ============================================================
```
### ============================================================
1. The Anatomy of a Closure

A closure is created every time 
a function is defined inside another function. 

The inner function "closes over" 
the variables of the outer function, 
keeping them alive in memory 
even if the outer function is "popped" off the stack.

```js
function createVault() {
  let secret = "Arch-Linux-2026"; // Private variable

  return function() {
    // This inner function is a Closure
    console.log(`The secret is: ${secret}`);
  };
}

const myVault = createVault(); 
// createVault() has finished and is off the stack!

myVault(); // "The secret is: Arch-Linux-2026"
```

### ============================================================
2. Why is this useful for a Backend Dev?

### --------------------------------------------------------
A. Data Privacy (Encapsulation)

In C++, you have private class members. 
In JavaScript, 
closures are the primary way to create truly private variables. 
Notice in the example above, 
there is no way to change or see secret except by calling myVault().

### --------------------------------------------------------
B. Function Factories
You can use closures to create specialized versions of a function.
```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = makeAdder(5);
const addTen = makeAdder(10);

console.log(addFive(2)); // 7
console.log(addTen(2));  // 12
```

### ============================================================
3. The "Backpack" Analogy
Imagine a function is a hiker.
    - Lexical Scope is the map the hiker was born with.
    - The Closure is the backpack.
    - When the function (the hiker) 
      leaves its parent's house (the outer function), 
      it packs all the variables it might need into its backpack. 
      Even if the house is demolished (the outer function returns), 
      the hiker still has everything they need in the backpack.

### ============================================================
4. Closures in Node.js (Real World)
In a Node.js server, you use closures constantly with Middleware and Callbacks.
```js
function authorize(role) {
  return function(req, res, next) {
    if (req.user.role === role) {
      next(); // Success
    } else {
      res.status(403).send("Forbidden");
    }
  };
}

// Usage in Express
// app.get('/admin', authorize('admin'), adminDashboard);
```

