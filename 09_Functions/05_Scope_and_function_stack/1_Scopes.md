```js
// ============================================================
// JavaScript Scopes
// ============================================================
// 1. Global: Accessible everywhere. (Use sparingly).
// 2. Module: Private to the file. (The Node.js standard).
// 3. Function: Private to the function (var, let, const).
// 4. Block: Private to { } (let and const only).
// 5. Lexical: Inner scopes can see outer scopes, but not vice-versa.
// ============================================================
```
### ============================================================
1. Global Scope
The "Root" level. 
Any variable declared outside of a function or a block 
belongs to the global scope. 
In the browser, this is the window object; 
in Node.js, it is the global object.

Risk: Global variables can be overwritten by any part of your program.
Tip: Avoid these as much as possible to keep your "global namespace" clean.
```js
const distro = "Arch"; // Global
function printDistro() {
  console.log(distro); // Accessible here
}
```

### ============================================================
2. Module Scope
This is specific to Node.js and modern JavaScript modules (import/export). 
When you write code inside a file (a module), 
variables declared there are private to that file. 
They are not global unless you explicitly export them.

Node.js Tip: 
    This is why you can have a variable 
    const port = 3000 
    in five different files and they won't conflict.

### ============================================================
3. Function Scope
Variables declared inside a function 
(using var, let, or const) 
are only accessible inside that function.
```js
function initSystem() {
  var status = "booting"; // Function Scoped
  console.log(status);
}

initSystem();
console.log(status); // ❌ ReferenceError: status is not defined
```

### ============================================================
4. Block Scope
This is the most "modern" and safest scope, 
introduced with let and const. 
A "block" is anything between curly braces { }, 
such as an if statement or a for loop.

⚠️ Note: var does not respect block scope (it "leaks" out), but let and const do.

```js
if (true) {
  const kernel = "Linux"; // Block Scoped
  var version = "6.1";    // NOT Block Scoped (Function/Global scoped)
}

console.log(version); // "6.1" (It leaked!)
console.log(kernel);  // ❌ ReferenceError: kernel is not defined
```

### ============================================================
5. Scope Chain (Lexical Scoping)
JavaScript uses Lexical Scoping, 
meaning a function looks for variables starting from its own scope 
and moves outward until it finds them 
or hits the Global scope. 
It never looks "down" into child functions.

