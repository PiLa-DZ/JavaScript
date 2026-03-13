```js
// ============================================================
// IIFE (Immediately Invoked Function Expression)
// ============================================================
// 1. Definition: (function() { ... })();
// 2. Purpose: Execute code immediately and create private scope.
// 3. Privacy: Variables inside do not leak to the global scope.
// 4. Modern JS: Largely replaced by ES Modules (import/export), 
//    but still useful for top-level 'await' work in Node.js.
// 5. Async IIFE: (async () => { await ... })();
// ============================================================
```
### ============================================================
IIFE (Immediately Invoked Function Expression)

It’s a function that runs as soon as it is defined 
and then vanishes, 
leaving no trace in your global scope.

### ============================================================
1. The Syntax
An IIFE has two main parts:
The Expression: 
    The function is wrapped in parentheses (). 
    This tells the JavaScript engine to treat it as an expression, 
    not a standard function declaration.
The Invocation: 
    A second pair of parentheses () at the end, 
    which executes the function immediately.
```js
(function() {
  const secretKey = "Arch-1234";
  console.log("IIFE Initialized!");
})();
// Output: IIFE Initialized!
```

### ============================================================
2. Why use an IIFE?

### --------------------------------------------------------
A. Data Privacy (The Sandbox)
Variables declared inside an IIFE cannot be accessed from the outside. 
This is perfect for initialization logic in a Node.js app 
where you want to set up a database connection 
but don't want those setup variables floating around in your main code later.
```js
(function() {
  let initCode = 0x42; 
  // do something complex...
})();

console.log(initCode); // ReferenceError: initCode is not defined
```

### --------------------------------------------------------
B. Avoiding Global Namespace Pollution
If you are working on a large project with many contributors, 
using IIFEs ensures that your variable temp 
doesn't overwrite someone else's variable temp.

### ============================================================
3. Arrow Function IIFEs
```js
(() => {
  console.log("System override initiated...");
})();
```

### ============================================================
4. IIFE with Parameters
You can even pass arguments into an IIFE. 
This is often used in browser development to "alias" global variables 
(like passing jQuery in as $).
```js
((distro, shell) => {
  console.log(`Setting up ${distro} with ${shell}...`);
})("Arch", "zsh");
```

### ============================================================
5. An Async IIFE combines the IIFE pattern with the async/await syntax.
```js
(async () => {
  try {
    const response = await fetch('https://api.archlinux.org/packages/');
    const data = await response.json();
    console.log("Packages loaded:", data.length);
  } catch (err) {
    console.error("Initialization failed:", err);
  }
})();
```

