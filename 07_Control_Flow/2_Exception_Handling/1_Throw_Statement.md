```js
// ============================================================
// Exception Handling: The throw Statement
// ============================================================
// 1. Purpose: Manually trigger an exception and stop execution.
// 2. Behavior: Jumps to the nearest 'catch' block.
// 3. Best Practice: Always throw the Error object: throw new Error("msg");
// 4. Trace: Using the Error object preserves the stack trace for debugging.
// ============================================================
```

### 1. What is the throw statement?
The throw statement allows you to create a custom error. 
When a throw statement is hit, 
the current function stops immediately, 
and the engine looks for the nearest catch block to handle the mess. 
If no one catches it, 
your Node.js process crashes.

### 2. Throwing a Basic Error
```js
function installPackage(user) {
  if (!user.isSudoer) {
    throw new Error("Permission Denied: User is not in the sudoers file.");
  }
  
  console.log("Installing...");
}

// Execution stops here if the throw is hit.
```

### 3. Why throw an Error Object instead of a String?
    You might be tempted to do throw "Error!", 
    but as a backend developer, 
    you want the Stack Trace.

    throw "Error": Just gives you the text.
    throw new Error("Error"): 
        Gives you the text plus the file name 
        and the exact line number where the problem started. 
        This is vital for debugging in your Neovim terminal.

### 4. Throwing Custom Objects
Sometimes, 
you need to pass more than just a message
maybe an error code or a specific status.

```js
throw {
  code: 404,
  message: "Config file .zshrc not found",
  critical: true
};
```
