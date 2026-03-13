```js
// ============================================================
// Exception Handling: try...catch...finally
// ============================================================
// try:      Put risky code here.
// catch:    Handle the error (access stack trace via 'err').
// finally:  Cleanup (runs regardless of success/error).
//
// Key Rule: Use 'finally' for resource management (closing files/connections).
// ============================================================
```

### 1. The Anatomy of the Block
```js
try {
  // 1. The "Protected" Zone
  // Code that might throw an error goes here.
} catch (error) {
  // 2. The "Recovery" Zone
  // Code that runs ONLY if an error occurred in the try block.
} finally {
  // 3. The "Cleanup" Zone
  // Code that runs NO MATTER WHAT (success or failure).
}
```

### 2. Breaking Down the Zones
1. The try Block
You wrap the "risky" code here. 
The moment an error is thrown inside try, 
the engine immediately stops executing the rest of the lines 
in that block and jumps to the catch.

2. The catch Block
- This block receives the Error Object we talked about earlier.
- You can name the variable anything (usually err or error).
- This is where you log the error to your terminal 
  or send a "500 Internal Server Error" response to a client.

3. The finally Block
- This is the most "system-admin" part of the block. 
  It executes whether the code succeeded or failed.
- Use Case: 
    Closing a file descriptor, 
    ending a database connection, 
    or stopping a "loading" spinner in a UI.

### 3. Why use finally instead of just writing code after the block?
- The magic of finally is that it runs even 
  if you return inside the try or catch blocks.
```js
function test() {
  try {
    return "Success!";
  } finally {
    console.log("I run even after a return!");
  }
}
test() // Result: I run even after a return!
```
