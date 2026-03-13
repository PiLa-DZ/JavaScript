```js
// ============================================================
// JS ARCHITECTURE: THIS IN A PLAIN FUNCTION
// ============================================================
// 1. DEFAULT BINDING: When a function is called standalone.
// 2. STRICT MODE: 'this' is 'undefined' (Recommended).
// 3. SLOPPY MODE: 'this' is 'global' (Dangerous).
// 4. THE TRAP: Inner functions do NOT inherit 'this' from
//    their parent methods. They reset to the default.
// 5. DIAGNOSIS: If you see 'TypeError: Cannot read property
//    X of undefined', you likely called a method as a
//    plain function.
// ============================================================
```

### ============================================================
1. The Default Behavior (Sloppy vs. Strict)

In a regular function (not a method of an object), 
the value of this depends entirely on whether you are using Strict Mode.

### --------------------------------------------------------
Sloppy Mode (The Security Risk):
this defaults to the Global Object (global in Node.js).
```js
function checkGlobal() {
    console.log(this === global); // true
}
```

### --------------------------------------------------------
Strict Mode (The Modern Standard):
this defaults to undefined. 
This is why we always use Strict Mode
it forces you to be explicit rather than 
accidentally polluting the global namespace.
```js
"use strict";
function checkStrict() {
    console.log(this); // undefined
}
```

### ============================================================
2. The "Call Site" Rule

Remember: 
    this is NOT determined by where the function is written, 
    but by how it is called. 
    If you call a function "plainly" (without a dot and without new), 
    it falls back to the default behavior.

```js
"use strict";

const server = {
    os: "Arch",
    printOS: function() {
        console.log(this.os);
    }
};

// 1. Implicit Calling (Method style)
server.printOS(); // "Arch" (this = server)

// 2. Plain Function Calling (Reference style)
const standalone = server.printOS;
standalone(); // ❌ TypeError: Cannot read property 'os' of undefined
```

### ============================================================
3. The Nested Function Problem

This is the #1 source of bugs in Node.js backend logic. 
If you define a function inside another function, 
the inner function does not inherit the this of the outer function.

```js
const dev = {
    stack: "Node.js",
    work: function() {
        console.log("Working on: " + this.stack);

        function helper() {
            // ❌ This is a plain function call!
            // It resets 'this' to undefined.
            console.log("Helper sees: " + this.stack);
        }

        helper();
    }
};

dev.work();
// Output: "Working on: Node.js"
// Output: TypeError (inside helper)
```

