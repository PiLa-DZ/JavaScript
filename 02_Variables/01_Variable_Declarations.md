1. Scope (Where the variable lives)
var is Function-Scoped: If you declare a var inside an if block or a for loop, it "leaks" out and is available everywhere in the surrounding function.
let & const are Block-Scoped: They stay strictly within the { curly braces } where they are defined. This prevents accidental bugs where you overwrite a variable from another part of the code.

2. Hoisting (When the variable is created)
var: Both the declaration and the initialization are "hoisted" to the top of the script. If you try to access a var before it's defined, it returns undefined instead of crashing.
let & const: These are also hoisted, but they enter a Temporal Dead Zone (TDZ). If you try to use them before the line where they are defined, your program will crash with a ReferenceError.


3. Re-assignment vs. Re-declaration
```JS
/*
  Feature         | var  | let | const
 -----------------+------+-----+-----------------------
  Can Re-assign?  | Yes  | Yes | No
  Can Re-declare? | Yes  | No  | No
  Needs Value?    | No   | No  | Yes (must initialize)
*/
```

A Note on const and Objects
A common misconception is that const makes data immutable. 
It doesn't. 
It only prevents you from re-assigning the variable name to a new memory address.
```JS
const user = { name: "Archie" };
user.name = "Tux"; // This works! (Mutating the object)
user = { name: "Linux" }; // This crashes! (Re-assigning the variable)

/*
  Characteristic | var                     | let                        | const
 ----------------+-------------------------+----------------------------+----------------------------------
  Scope          | Function Scope          | Block Scope                | Block Scope
  Hoisting       | Yes (returns undefined) | Yes (throws Error - TDZ)   | Yes (throws Error - TDZ)
  Global Object  | Adds to window / global | Does NOT add               | Does NOT add
  Use Case       | Legacy code (Avoid)     | Variables that will change | Default choice for everything
*/
```
