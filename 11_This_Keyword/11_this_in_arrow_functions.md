```js
// ============================================================
// JS ARCHITECTURE: THIS IN ARROW FUNCTIONS
// ============================================================
// 1. LEXICAL SCOPE: Arrow functions do not have their own
//    'this'. They inherit it from the parent scope.
// 2. STATIC BINDING: Once defined, 'this' is locked forever.
// 3. IMMUNITY: .call(), .apply(), and .bind() cannot change
//    the 'this' inside an arrow function.
// 4. USE CASE: Perfect for callbacks (setTimeout, Promises,
//    Event Listeners) to maintain parent context.
// 5. ANTI-PATTERN: Avoid using them for top-level object
//    methods if you need access to the object properties.
// ============================================================
```

### ============================================================
1. The "Invisible" This

Because Arrow Functions don't have a this context, 
they cannot be used as constructors 
(you can't use new with them) 
and they ignore .call(), .apply(), and .bind().

```js
"use strict";

const sysInfo = {
    distro: "Arch",
    // Regular function: 'this' depends on the call site
    getDistro: function() { 
        console.log("Regular:", this.distro); 
    },
    // Arrow function: 'this' is inherited from the global/module scope
    getDistroArrow: () => { 
        console.log("Arrow:", this.distro); 
    }
};

sysInfo.getDistro();      // Output: Regular: Arch
sysInfo.getDistroArrow(); // Output: Arrow: undefined (inherited from top-level)
```

### ============================================================
2. The Solution to the "Nested Trap"

Remember how nested functions inside methods lost their this? 
Arrow functions fix this perfectly because 
they look "upstairs" to the parent method to find this.

```js
const server = {
    port: 8080,
    start() {
        // Parent scope 'this' is 'server'
        setTimeout(() => {
            // Arrow function captures 'this' from start()
            console.log(`Listening on port: ${this.port}`);
        }, 1000);
    }
};

server.start(); // Output: Listening on port: 8080 (Success!)
```

### ============================================================
3. Immune to Hijacking

As we saw in Event Handlers, 
the browser or Node.js likes to hijack this. 
Arrow functions are immune to this "sudo" override.

```js
// For Browser
const monitor = {
    status: "Active",
    init: function() {
        // Even if the button tries to hijack 'this', 
        // the arrow function refuses.
        document.querySelector('button').addEventListener('click', () => {
            console.log(this.status); // Still "Active"
        });
    }
};
```

### ============================================================
4. When NOT to use them

As a Senior Architect, 
you must know the tool's limits. 
Do not use Arrow Functions for:

    Object Methods: If you want this to point to the object itself.

    Prototypes: Adding methods to a prototype chain.

    Constructors: They will throw a TypeError if used with new.

