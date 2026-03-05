### ============================================================
Step 1: Activation (How to turn it on)

### --------------------------------------------------------
A. The Directive
You invoke it by adding this exact string to the very top of your file or function:
```js
"use strict";
```

### --------------------------------------------------------
B. Global Scope vs. Function Scope
You can be strict for the whole file, or just for one specific function.
```js
// --- File: index.js ---
"use strict"; // Entire file is now in Strict Mode

function archUpdate() {
    // strict rules apply here
}
```
OR
```js
function legacyCode() {
    // Normal, "sloppy" mode here
}

function modernCode() {
    "use strict"; 
    // Only this function is strict
}
```

### ============================================================
Important Note for your Wiki (The Node.js Factor)
Since you are a Node.js and TypeScript developer:

ES Modules: If you use import/export (ESM), Strict Mode is always on by default. You don't even need to write the string!
Classes: Code inside a class body is always in Strict Mode.
TypeScript: TS assumes Strict Mode. If you learn these rules, you'll understand why TypeScript yells at you for certain patterns.
