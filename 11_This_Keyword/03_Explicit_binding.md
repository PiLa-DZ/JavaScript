```js
// ============================================================
// JS ARCHITECTURE: EXPLICIT BINDING (OVERVIEW)
// ============================================================
// 1. DEFINITION: Manually overriding the default 'this'
//    binding using Function.prototype methods.
// 2. THE BIG THREE:
//    - .call()  : Execute NOW (Comma-separated args).
//    - .apply() : Execute NOW (Array-based args).
//    - .bind()  : Execute LATER (Returns a new function).
// 3. SYSTEM ANALOGY:
//    - Like 'sudo' for context. You are explicitly defining
//      the environment where the code must run.
// 4. WHY USE IT?
//    - Function Borrowing (Reuse logic across objects).
//    - Callback context preservation (Ensuring 'this' doesn't
//      drift to 'undefined' or 'global').
// 5. STACK HIERARCHY:
//    - Explicit Binding beats Implicit (Method) Binding.
//    - New Binding beats Explicit Binding.
// ============================================================
```

# JavaScript: Explicit Binding

Explicit binding occurs when `.call()`, `.apply()`, or `.bind()` are used to 
manually set the execution context (`this`).

### Methods
| Method   | Execution | Argument Format | Return Value |
| :------- | :-------- | :-------------- | :----------- |
| `.call()`  | Immediate | Comma-separated | Result of function |
| `.apply()` | Immediate | Array          | Result of function |
| `.bind()`  | Deferred  | Comma-separated | A NEW bound function |

### Systems Analogy
- `.call`/`.apply`: Running a script with specific environment variables.
- `.bind`: Creating a symbolic link (symlink) to a script with its environment pre-configured.

### Key Rule
In "Strict Mode", if you pass `null` or `undefined` as the first argument, 
`this` will remain `null` or `undefined`. (In Sloppy Mode, it would default to the Global Object).

