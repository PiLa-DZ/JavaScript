```js
// ============================================================
// Recursion: Function Calling Itself
// ============================================================
// 1. Base Case: Crucial to prevent 'Maximum call stack size exceeded'.
// 2. Recursive Step: Moves the input closer to the base case.
// 3. Logic: Solves a big problem by breaking it into smaller versions.
// 4. Use Case: File systems, DOM trees, JSON parsing, algorithms.
// ============================================================
```

### ============================================================
1. The Two Golden Rules
To prevent a "Stack Overflow" 
(filling up your RAM with infinite function calls), 
every recursive function must have two parts:

    The Base Case: 
        The condition that stops the recursion (the "Exit" strategy).
    The Recursive Step: 
        The part where the function calls itself 
        with a different (usually smaller) input.

Example: Calculating Factorials ($n!$)
5! = 5 * 4 * 3 * 2 * 1 = 120
```js
function factorial(n) {
  // 1. Base Case: stop at 1
  if (n <= 1) return 1;

  // 2. Recursive Step: n * factorial of (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

