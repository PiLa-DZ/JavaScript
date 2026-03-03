### The Three Primary Scopes
1. Global Scope
    - Variables declared outside of any function or block. They are accessible from anywhere in your script.
        - Risk: Global variables can be overwritten by other scripts, leading to collisions.
        - Example: A configuration constant like const API_URL.

2. Function Scope
    - Variables declared inside a function (using var, let, or const). They are only visible inside that function.
    - Behavior: Once the function finishes executing, these variables are typically "garbage collected" (removed from memory).

3. Block Scope (Modern Standard)
    - Introduced with ES6 (let and const). A "block" is any code between { curly braces }.
    - Unique Feature: var ignores block scope, but let and const respect it. 
      This is why you should avoid var in your TypeScript projects.

### The Scope Chain (Lexical Scoping)
When you try to access a variable, the engine looks:
1. In the current local scope.
2. If not found, it moves one level up to the outer scope.
3. It continues until it reaches the Global Scope.
4. If it's still not found, it throws a ReferenceError.

