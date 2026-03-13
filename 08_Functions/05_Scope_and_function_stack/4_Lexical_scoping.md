```js
// ============================================================
// Lexical Scoping (Static Scoping)
// ============================================================
// 1. Definition: Scope is determined by the physical location 
//    in the source code.
// 2. Scope Chain: Inner functions search outward through 
//    parent scopes until they hit the Global scope.
// 3. Security: Child functions can see parent data, but parents 
//    are blocked from child data.
// 4. Persistence: Functions "remember" their birthplace.
// ============================================================
```

### ============================================================
1. The "Outer Space" Rule
A function has access to:
    Variables defined inside its own curly braces {}.
    Variables defined in its parent's scope.
    Variables in the Global scope.

Crucially, an outer function cannot see inside its children.
```js
const globalDistro = "Arch";

function outer() {
  const outerVar = "I am outside";

  function inner() {
    const innerVar = "I am inside";
    
    // Looks up the "Scope Chain"
    console.log(innerVar);    // Found in Local
    console.log(outerVar);    // Found in Parent (Lexical)
    console.log(globalDistro);// Found in Global
  }

  inner();
  // console.log(innerVar); // ❌ ReferenceError (Cannot look "down")
}

outer();
```

### ============================================================
2. Static vs. Dynamic

JavaScript uses Static Scoping. 
This means the "map" of which variables a 
function can see is locked in the moment you finish writing the code in Neovim.

It doesn't matter who calls the function later 
or where it is called from; 
it will always look at its original 
birthplace in the code to find its variables.
```js
const name = "Global User";

function printName() {
  console.log(name); 
}

function wrapper() {
  const name = "Local Admin";
  printName(); // Even though it's called here, it still sees "Global User"
}

wrapper(); // Output: "Global User"
```

### ============================================================
3. Lexical Scoping in Node.js Modules
In your Node.js backend, 
lexical scoping is what allows you to create "private" logic. 
If you define a helper function at the top of your file, 
every other function in that same file can "see" 
it because of the shared lexical environment of the module.

### ============================================================
4. The Foundation of Closures
Lexical scoping is the reason Closures exist. 
Because a function "remembers" its lexical scope even 
after the outer function has finished executing, 
it can carry those variables around like a backpack.

