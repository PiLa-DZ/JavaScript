
```js
try {
//...
} catch (err) {
    // We wrap the old error inside the new one
    throw new Error("Database Connection Failed", { cause: err });
  }
```
Error Bubbling: 
    Errors move upward from the "Child" function 
    to the "Parent" function until they hit a catch block.

Re-throwing: 
    Used when a function wants to log an error 
    or perform cleanup but still wants to signal 
    to the caller that the operation failed.

Swallowing: 
    If you catch an error 
    but don't re-throw it, 
    the parent function thinks everything went perfectly 
    (the "Happy Path" continues).

The Chain: 
    Use the { cause: err } syntax 
    to maintain a history of what went wrong across multiple functions.
