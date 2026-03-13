```js
// ============================================================
// JS EXPLICIT BINDING: .call()
// ============================================================
// 1. Mechanism: Executes function IMMEDIATELY with 'this'
//    manually assigned to the first argument.
// 2. Arguments: Passed individually (comma-separated).
//    Syntax: func.call(thisContext, arg1, arg2, ...)
// 3. Strict Mode: Passing null/undefined sets 'this' to
//    null/undefined (prevents global pollution).
// 4. Performance: Faster than .apply() in older V8 versions
//    because it avoids array-to-stack unpacking.
// 5. Use Case: When the context (this) is known and arguments
//    are fixed/static.
// ============================================================
```

## Method: Function.prototype.call()

### Definition
Invokes a function with a given `this` value and arguments provided individually.

### Mechanical Operation
1. Suspends normal `this` binding.
2. Sets `this` to the first argument of `.call()`.
3. Executes the function body.

### Strict Mode Behavior
- **Explicit Context:** Passing `null`/`undefined` results in exactly `null`/`undefined`.
- **Safety:** Prevents accidental modification of the `global` object.

### V8 Tip
Using `.call()` is generally very fast. However, if you are passing 
a massive number of arguments, ensure you aren't hitting stack limits 
(though this is rare for `.call()`).

### ============================================================
1. The Syntax
```js
function.call(thisContext, arg1, arg2, ...);
```
thisContext: The object you want to use as this.
arg1, arg2...: The arguments passed to the function, comma-separated.

### ============================================================
2. A "Bare Metal" Example

Imagine you are building a system to manage 
different Linux distributions on your network. 

You have a generic function to set the hostname, 
but you want to apply it to specific server objects.

```js
'use strict';

function setHostname(newHost, domain) {
    this.hostname = newHost;
    this.fqdn = `${newHost}.${domain}`;
    console.log(`[SYSADMIN] Configured ${this.distro} machine: ${this.fqdn}`);
}

const server01 = { distro: "Arch" };
const server02 = { distro: "Fedora" };

// We "inject" server01 into the function as 'this'
setHostname.call(server01, "arch-main", "local");

// Now server01 has the properties
console.log(server01.hostname); // "arch-main"
```

### ============================================================
3. Strict Mode Protection

This is why we learned Strict Mode first!

Sloppy Mode: 
    If you pass null or undefined to .call(), 
    JavaScript "helps" you by defaulting this 
    to the global object (window or global). 
    This is dangerous and can lead to global namespace pollution.

Strict Mode: 
    If you pass null, this is null. 
    If you pass undefined, this is undefined. 
    No magic, no defaults.

```js
"use strict";
function debug() {
    console.log(this);
}

debug.call(undefined); // Output: undefined
```

### ============================================================
4. Real-World Use Case: Constructing "Sub-classes"

Before the class keyword became popular in JS, 
.call() was the primary way to perform Constructor Stealing (inheritance). 
Even in modern Node.js, you'll see this in legacy codebases.

```js
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Software(name, price, license) {
    // We "borrow" the Product constructor logic
    Product.call(this, name, price); 
    this.license = license;
}

const nvim = new Software("Neovim", 0, "Apache-2.0");
console.log(nvim.name); // "Neovim"
```

