```js
// ============================================================
// Strict Mode: Step 4 - Security Layer (The 'this' Rule)
// ============================================================
// 1. Default 'this': Becomes 'undefined' instead of 'global'.
// 2. Fail Fast: Accessing 'this.prop' in a plain function 
//    now throws an error. Prevents global pollution.
// 3. Primitive 'this': Prevents automatic "boxing" of 
//    strings/numbers into objects during .call()/.apply().
// 4. Security: Prevents functions from accidentally 
//    modifying the global environment.
// ============================================================
```

In "Sloppy Mode," 
JavaScript has a habit of "defaulting" to the global object, 
which can lead to accidental data leaks or security vulnerabilities.


### ============================================================
1. this is no longer the Global Object
In regular JavaScript, 
if you call a function that isn't attached to an object, 
this defaults to the Global Object 
(window in the browser, global in Node.js).
```js
// Sloppy Mode
function showThis() {
    console.log(this); 
}
showThis(); // Prints the entire [window] or [global] object!

// ============================================================
// In Strict Mode:
// If a function is called without a context, this is simply undefined.
"use strict";

function showThis() {
    console.log(this);
}
showThis(); // Prints: undefined
```

### ============================================================
2. Why is this a "Security" Layer?

Imagine you are building an authentication module for your backend. 
If you accidentally use this inside a helper function and modify it, 
in Sloppy Mode you might accidentally overwrite a global Node.js variable 
or leak sensitive data into the global scope.

By forcing this to be undefined, 
Strict Mode ensures that if you try to access a property on it 
(like this.apiKey = '...'), 
your app will crash immediately with a TypeError. 
Crashing is better than leaking data!

### ============================================================
3. No "Boxing" of Primitives

In Sloppy Mode, 
if you call a function and pass a primitive (like a string or number) 
as the this context using .call() or .apply(), 
JavaScript "boxes" it into an object. 
Strict Mode keeps the primitive as a primitive.
```js
"use strict";

function checkType() {
    console.log(typeof this);
}

checkType.call("Arch"); 
// Strict Mode: "string"
// Sloppy Mode: "object" (String object)
```

### ============================================================
4. Why this matters for your TypeScript Journey
TypeScript is very strict about Contextual Typing. 
If you try to use this inside a function without telling 
TypeScript what this is supposed to be, 
it will throw an error (under the noImplicitThis rule).

