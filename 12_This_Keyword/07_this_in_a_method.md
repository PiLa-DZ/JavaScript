```js
// ============================================================
// JS ARCHITECTURE: IMPLICIT BINDING (METHODS)
// ============================================================
// 1. DEFINITION: 'this' refers to the object that owns the
//    method at the time of the CALL.
// 2. THE RULE: Look at the call site. Whatever is to the
//    left of the '.' is your 'this'.
// 3. NESTED TRAP: Plain functions defined inside methods
//    RE-BIND 'this' to undefined (Strict) or Global (Sloppy).
// 4. CHAINING: In objA.objB.method(), 'this' is objB.
// 5. WHY IT MATTERS: Essential for Object-Oriented patterns
//    and creating reusable service modules in Node.js.
// ============================================================
```

### ============================================================
1. The Left-of-the-Dot Rule

When a function is called as a method of an object, 
this is bound to the object that is immediately to the left of the dot.

```js
"use strict";

const service = {
    name: "nginx",
    start: function() {
        // 'this' refers to the 'service' object
        console.log(`[SYSTEMD] Starting ${this.name}...`);
    }
};

service.start(); // Result: [SYSTEMD] Starting nginx...
```

### ============================================================
2. Nesting Logic (The Common Trap)

A common mistake in Node.js is assuming that this stays the same 
if you have a function inside a method.

If you create a regular function inside a method, 
it loses the connection to the object 
and defaults back to undefined (in Strict Mode).

```js
const user = {
    username: "Archie",
    login() {
        console.log(`Logging in ${this.username}`);

        function internalHelper() {
            // ❌ 'this' is undefined here!
            console.log(`Internal context: ${this.username}`);
        }
        
        internalHelper();
    }
};

user.login(); 
// Output: "Logging in Archie"
// Output: TypeError (cannot read property 'username' of undefined)
```

### ============================================================
3. The Object Chain

If you have nested objects, 
this only cares about the most immediate parent in the call chain.

```js
const cluster = {
    id: "cluster-01",
    node: {
        id: "node-alpha",
        printId() {
            console.log(this.id);
        }
    }
};

cluster.node.printId(); // Output: "node-alpha"
// It ignores 'cluster-01' because 'node' is to the left of the dot.
```
