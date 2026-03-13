```js
// ============================================================
// Strict Mode: Step 5 - Optimization & Future-Proofing
// ============================================================
// 1. Performance: Allows the V8 engine to optimize code 
//    via static analysis.
// 2. Inlining: Disabling 'arguments.callee' allows the 
//    compiler to inline functions for speed.
// 3. Future Keywords: Reserves words like 'interface' and 
//    'public', making the transition to TypeScript seamless.
// 4. Modern Standard: Classes and Modules use this 
//    automatically because it is simply "better code."
// ============================================================
```

### ============================================================

reason why Strict Mode is the default for modern JavaScript. 
makes life easier for the V8 Engine (the C++ heart of Node.js).

every bit of performance matters when handling thousands of requests.


### ============================================================
1. Static Analysis & Faster Execution
In "Sloppy Mode," 
JavaScript is highly dynamic. 
The engine often has to "guess" what a variable is 
or where it belongs until the very last millisecond. 
This prevents the compiler from optimizing the code effectively.

By enforcing Strict Mode, 
you remove the "weird" edge cases (like with or duplicate parameters). 
This allows the JIT (Just-In-Time) compiler to:
    Perform better Static Analysis (reading the code without running it).
    Convert your JavaScript into highly optimized Machine Code faster.
    Allocate memory more predictably.

### ============================================================
2. Eliminating arguments.callee
In the old days, 
functions had a property called arguments.callee 
which allowed a function to refer to itself. 
This sounds cool, 
but it was a performance nightmare because it prevented Inlining 
    (a key compiler optimization 
     where the engine replaces a function call 
     with the actual code of the function).
```js
"use strict";
function recurse() {
  // console.log(arguments.callee); // ❌ TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed
}
```
By removing this, 
the engine can "inline" functions, 
making your recursive logic much faster.

### ============================================================
3. Reserved Keywords for the Future
Strict Mode "claims" 
certain words that might become part of the language later. 
This prevents your code from breaking when the ECMAScript standard updates.

You cannot use these as variable names in Strict Mode:
```js
// implements, interface, let, package, private, protected, public, static, yield.
```

Notice anything? 
Almost all of these are keywords in TypeScript! 
By using Strict Mode now, 
you are literally reserving the space for TypeScript’s features.
