```js
// ============================================================
// The Call Stack (LIFO: Last In, First Out)
// ============================================================
// 1. Function Call: Pushes a new frame onto the stack.
// 2. Function Return: Pops the top frame off the stack.
// 3. Execution: Only the top-most function is running.
// 4. Recursion: Must return to avoid 'Stack Overflow'.
// 5. Stack Trace: The "map" of function calls provided in errors.
// ============================================================
```

### ============================================================

Function Stack (Call stack) --> LIFO (Last In, First Out)

### ============================================================
1. How the Stack Works

Global Execution Context: 
    When your script starts, this is the first thing on the stack.

Push: 
    Every time you invoke (call) a function, a new "frame" is created and pushed to the top.

Execute: 
    JavaScript only ever executes the function at the very top of the stack.

Pop: 
    Once the function returns a value, it is removed, and the engine goes back to the function below it.

### ============================================================
2. Tracing the Stack
```js
function getKernel() {
  return "Linux";
}

function getDistro() {
  const kernel = getKernel(); // getKernel is pushed here
  return `Arch ${kernel}`;
}

function bootSystem() {
  const info = getDistro(); // getDistro is pushed here
  console.log(info);
}

bootSystem(); // bootSystem is pushed here
```

### ============================================================
3. The "Stack Overflow"
Because the stack has a limited size 
(defined by the JavaScript engine like V8), 
you can actually run out of memory 
if you push too many frames. 
This usually happens with Infinite Recursion.
```js
function recurse() {
  recurse(); // This will keep pushing to the stack forever
}

recurse(); // ❌ RangeError: Maximum call stack size exceeded
```

### ============================================================
4. The Stack in Node.js Debugging
When your Node.js app crashes, 
the error message in your terminal is literally a "Stack Trace." 
It shows you the path the engine took before it hit the error.
```Bash
Error: Something went wrong
    at getKernel (index.js:2:9)
    at getDistro (index.js:6:18)
    at bootSystem (index.js:11:16)
```
Reading this from top to bottom tells you exactly which function failed and who called it.

