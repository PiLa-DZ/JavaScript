```js
// ============================================================
// Strict Mode: Step 3 - Ambiguity Layer (Code Clarity)
// ============================================================
// 1. Unique Parameters: Functions cannot have duplicate 
//    argument names.
// 2. No 'with': The 'with' statement is banned for clarity 
//    and performance.
// 3. Octal Safety: Leading zeros (012) are banned. Use '0o' 
//    for octal (0o12).
// 4. Optimization: Allows the JS engine to perform "Static 
//    Analysis" for better performance.
// ============================================================
```

Code Clarity. 
In "Sloppy Mode," 
JavaScript has a few weird, 
ambiguous syntax rules that make code hard to read 
and even harder for the engine to optimize.


### ============================================================
1. No Duplicate Parameter Names
```js
// ============================================================
// Sloppy Mode
function configureServer(port, port) { 
  // Which 'port' is which? The second one wins.
  console.log(port); 
}
configureServer(80, 443); // Prints 443

// ============================================================
"use strict";
function configureServer(port, port) { 
  // ❌ SyntaxError: Duplicate parameter name not allowed in this context
}
```

### ============================================================
2. The Death of with
There is a statement in JS called with. 
it’s used to expand the scope chain, 
but it makes it impossible to tell where a variable is coming 
from just by looking at the code. 
It's confusing for humans and slow for the V8 engine.
```js
"use strict";
const os = { version: "Arch" };

with (os) {
  console.log(version); // ❌ SyntaxError: Strict mode code may not include a with statement
}
```

### ============================================================
3. Octal Literal Changes
In old JavaScript, 
numbers starting with 0 were treated as Octal (Base 8). 
This caused massive confusion for developers 
trying to pad numbers with zeros (like 012 becoming 10).
```js
"use strict";
const permissions = 0755; // ❌ SyntaxError: Octal literals are not allowed in strict mode.

// The Modern way (ES6+):
const modernPermissions = 0o755; // This is allowed and clear!
```

