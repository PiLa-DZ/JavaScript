```js
// ============================================================
// Arrow Functions (=>)
// ============================================================
// 1. Syntax: (param) => expression
// 2. Implicit Return: No { } or 'return' needed for one-liners.
// 3. 'this': Lexically bound (inherits from parent scope).
// 4. Usage: Best for callbacks, array methods (.map, .filter), 
//    and simple logic.
// 5. Limit: Cannot be used as constructors (new).
// ============================================================
```

### ============================================================
1. The Syntax Evolution
```js
const add = (a, b) => {
  return a + b;
};
```

### ============================================================
2. The "Shortcuts" (Implicit Return)
```js
// One-liner
const multiply = (a, b) => a * b;

console.log(multiply(5, 2)); // 10
```

### ============================================================
4. What Arrow Functions CANNOT do

No arguments object: 
    They don't have their own arguments list (use Rest Parameters ...args instead!).
No prototype: 
    You cannot use them as Constructors (you can't use new with them).
No super: 
    They aren't ideal for certain complex object-oriented patterns.
