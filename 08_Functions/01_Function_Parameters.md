```js
// ============================================================
// Function Parameters & Arguments
// ============================================================
// 1. Basics: Missing arguments result in 'undefined'.
// 2. Default Params: (param = value). Used if arg is missing or undefined.
// 3. Rest Params (...args): Gathers remaining arguments into an Array.
//    ⚠️ * Must be the final parameter.
//    ⚠️ * Replaces the non-array 'arguments' object.
// ============================================================
```
### ============================================================
1. Function Parameters: The Basics

### --------------------------------------------------------
parameters: are the names listed in the function definition, 
arguments: are the real values passed to the function.
```js
// 'distro' and 'kernel' are parameters
function showSystemInfo(distro, kernel) {
  console.log(`System: ${distro}, Kernel: ${kernel}`);
}

// "Arch" and "Linux" are arguments
showSystemInfo("Arch", "Linux");
```

### --------------------------------------------------------
The "Missing" Argument Behavior
Unlike C++, 
if you don't pass an argument for a defined parameter, 
JavaScript won't throw an error. 
Instead, 
it assigns that parameter the value of undefined.
```js
function showSystemInfo(distro, kernel) {
  console.log(`System: ${distro}, Kernel: ${kernel}`);
}
showSystemInfo("Arch"); // Output: "System: Arch, Kernel: undefined"
```

### ============================================================
2. Default Parameters
Introduced in ES6, 
Default Parameters allow you to initialize parameters with default values 
if no value (or undefined) is passed. 
This is perfect for setting default configurations in your backend tools.
```js
function connectToDB(host = "localhost", port = 5432) {
  console.log(`Connecting to ${host} on port ${port}...`);
}

connectToDB();               // "Connecting to localhost on port 5432..."
connectToDB("192.168.1.1");  // "Connecting to 192.168.1.1 on port 5432..."
```

### ============================================================
3. Rest Parameters (...)
The Rest Parameter syntax allows a function 
to accept an indefinite number of arguments as an array. 
This is the modern replacement for the old arguments object.

⚠️ Rules for your Wiki:
    It must be the last parameter in the list.
    There can only be one rest parameter.

```js
// Example: A Logging System
function logger(level, ...messages) {
  // 'messages' is a real Array
  console.log(`[${level.toUpperCase()}]`, messages.join(" | "));
}

logger("info", "System Boot", "Kernel Loaded", "User Logged In");
// Output: [INFO] System Boot | Kernel Loaded | User Logged In
```
