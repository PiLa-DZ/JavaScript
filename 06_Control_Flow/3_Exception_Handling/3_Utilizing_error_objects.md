```js
// ============================================================
// Utilizing Error Objects
// ============================================================
// 1. Properties: .name (Type), .message (Details), .stack (Trace).
// 2. instanceof: Use this to check the error type in a catch block.
// 3. Custom Errors: Extend the 'Error' class to add metadata (e.g., statusCode).
// 4. Trace: Always check the .stack property in the terminal to find the file/line.
// ============================================================
```
### 1. The Anatomy of an Error Object
When you throw new Error("Something went wrong"), 
JavaScript creates an object with two primary properties 
that you will use constantly in your Neovim terminal:
    message:
        The human-readable string you passed to the constructor.
    name: 
        The type of error ("Error", "ReferenceError", "SyntaxError").
    stack: 
        (Non-standard but supported in Node.js) 
        A string representing the "Stack Trace"
        the exact trail of function calls leading to the failure.

### 2. Built-in Error Types
JavaScript has several specialized error constructors. 
Knowing which one you're dealing with helps you debug faster:
```js
/*
Error Type     | Meaning                                 | Example
---------------+-----------------------------------------+-------------------------------------
ReferenceError | You used a variable that doesn't exist. | console.log(nonExistentVar);
TypeError      | A value is not of the expected type.    | null.f(); or const x = 5; x();
SyntaxError    | You wrote code the engine can't parse.  | if (true) { (missing closing brace)
RangeError     | A number is outside its allowed range.  | new Array(-1);
*/
```

### 3. Custom Error Logic
you can use these types to decide how to respond to a client. 
For example, 
a TypeError might be a bug in your code (500 Internal Error), 
while a custom error might be a user mistake (400 Bad Request).
```js
try {
  // Logic that might fail
} catch (err) {
  if (err instanceof TypeError) {
    console.error("Type mismatch! Check your logic.");
  } else if (err instanceof ReferenceError) {
    console.error("Variable missing! Check your imports.");
  } else {
    console.error("An unknown error occurred:", err.message);
  }
}
```

### 4. Extending the Error Class
you'll want to create your own error types 
for your personal wiki or apps. 
This allows you to add custom properties like statusCode.
```js
class DatabaseError extends Error {
  constructor(message, table) {
    super(message); // Call the parent Error constructor
    this.name = "DatabaseError";
    this.table = table;
    this.statusCode = 500;
  }
}
try {
  throw new DatabaseError("Connection lost", "users");
} catch (e) {
  console.error(e);
}
// Result:
// DatabaseError: Connection lost
//     at Object.<anonymous> (/home/nabil/Desktop/app.js:12:9)
//     at Module._compile (node:internal/modules/cjs/loader:1811:14)
//     at Object..js (node:internal/modules/cjs/loader:1951:10)
//     at Module.load (node:internal/modules/cjs/loader:1532:32)
//     at Module._load (node:internal/modules/cjs/loader:1334:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47 {
//   table: 'users',
//   statusCode: 500
// }
```
