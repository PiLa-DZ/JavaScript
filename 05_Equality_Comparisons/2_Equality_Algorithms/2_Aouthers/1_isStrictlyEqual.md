### Strict Equality Comparison Algorithm
```js
// ============================================================
// Equality Algorithms: isStrictlyEqual (===)
// ============================================================
// 1. If Types are different -> false
// 2. If either is NaN -> false
// 3. If Numbers are same value (incl. 0 and -0) -> true
// 4. If Objects point to same reference -> true
// 5. Otherwise, if values are same -> true
// ============================================================
```
- It never converts Anything
- It never calls ToPrimitive.

- The Reference Check (Objects/Arrays)
    If both are Objects (including Arrays), 
    return `true` only if they 
    point to the exact same spot in memory.
    ```js
    [1] === [1] // --> false (Different references).
    const a = []; const b = a; a === b // --> true.
    ```
