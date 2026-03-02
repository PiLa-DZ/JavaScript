move the declarations of functions, variables, or classes 
to the top of their containing scope (global or function) 
before the code is actually executed.

1. How it works with var
When you use var, 
the declaration is hoisted, 
but the assignment is not. 
This leads to the infamous undefined behavior.

```JS
console.log(user); // Returns: undefined (No crash!)
var user = "ArchUser";
console.log(user); // Returns: "ArchUser"
```
- What the engine actually sees:
```JS
var user;           // Hoisted declaration (initialized to undefined)
console.log(user); 
user = "ArchUser";  // Assignment stays in place
console.log(user);
```

2. How it works with let and const
let and const are also hoisted, 
but they are not initialized with a value. 
They enter what is called the Temporal Dead Zone (TDZ).

3. Function Hoisting (The "Magic" Part)
Function declarations are hoisted entirely—both the name and the actual body of the function. This allows you to call a function before you've even written it in your file.
```TS
greet(); // Works perfectly!

function greet() {
  console.log("Hello from the bottom of the file!");
}
```
- Warning: This does not work for function expressions (assigning a function to a variable).
```TS
runTmux(); // TypeError: runTmux is not a function (it is currently undefined)

var runTmux = function() {
  console.log("Starting session...");
};
```

4. Summary of Hoisting Behaviors
```ts
/*
  Feature      | Hoisted? | Initial Value       | Result if accessed before line
 --------------+----------+---------------------+--------------------------------
  var          | Yes      | undefined           | undefined
  let / const  | Yes      | None                | ReferenceError (TDZ)
  Function Dec | Yes      | The entire function | Executes normally
*/
```
