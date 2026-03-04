```js
// ============================================================
// Equality Algorithms: Same-Value (Object.is)
// ============================================================
// 1. NaN is equal to NaN
// 2. 0 is NOT equal to -0 (Distinguishes the sign bit)
// 3. No Type Coercion
// ============================================================
```

The Same-Value algorithm is designed to be the "mathematically perfect" comparison.

```js
// Strict Equality (===)
console.log(0 === -0);            // true

// Same-Value (Object.is)
console.log(Object.is(0, -0));    // false
```
