```js
// ============================================================
// Strict Mode: Step 2 - Safety Layer (Silent Errors)
// ============================================================
// 1. No Accidental Globals: All variables MUST be declared 
//    (const/let/var). Prevents memory leaks.
// 2. Assignment Failures: Throws TypeError when writing to 
//    read-only properties.
// 3. Deletion Control: Prevents 'delete' on variables or 
//    functions.
// 4. TS Alignment: This mimics TypeScript's "noImplicitAny" 
//    and general strictness.
// ============================================================
```

### ============================================================

In "Sloppy Mode" (non-strict), 
JavaScript is famous for being "too nice"
it tries to ignore your mistakes, 
which leads to hidden bugs that are 
a nightmare to debug in a complex Node.js backend.

Strict Mode changes this by turning Silent Failures into Loud Exceptions.

### ============================================================
1. Preventing Accidental Globals
In regular JavaScript, 
if you forget to use const, let, or var, 
the engine doesn't complain. 
It just attaches that variable to the Global Object (window or global).
```js
// ============================================================
// Sloppy Mode
function setVersion() {
    kernel = "6.1-arch"; // Oops! Forgot 'const'. 
}
setVersion();
console.log(global.kernel); // "6.1-arch" -> This "leaked" into global memory!
```

```js
// ============================================================
// In Strict Mode:
"use strict";

function setVersion() {
    kernel = "6.1-arch"; // ❌ ReferenceError: kernel is not defined
}
```

### ============================================================
2. Impossible Assignments
Sometimes you try to write data to a place that is "Read-Only." 
In Sloppy Mode, 
the assignment just fails silently. 
You think the value changed, 
but it didn't.
```js
"use strict";

// Example: Trying to overwrite a read-only property
const archInfo = {};
Object.defineProperty(archInfo, 'distro', { value: 'Arch', writable: false });

archInfo.distro = 'Ubuntu'; // ❌ TypeError: Cannot assign to read only property
```

### ============================================================
3. Deleting the Undeletable
In JavaScript, you cannot delete a plain variable or a function. 
Strict Mode makes sure you know that.
```js
"use strict";

let pkg = "pacman";
delete pkg; // ❌ SyntaxError: Delete of an unqualified identifier in strict mode.
```

### ============================================================
4. Why this matters for your Wiki
you should note that these errors are your friends. 
In a large Node.js application, 
a "Silent Failure" (like the read-only error) 
might happen at 3 AM and not be noticed until the server crashes. 
Strict Mode ensures it crashes immediately during development so you can fix it.



