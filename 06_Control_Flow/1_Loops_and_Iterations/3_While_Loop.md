```js
// ============================================================
// The 'while' Loop
// ============================================================
// Syntax: while (condition) { ... }
// 
// 1. Checks condition BEFORE the first iteration.
// 2. Ideal for: When you DON'T know the total number of iterations.
// 3. Warning: Manually update your variables to avoid infinite loops.
// ============================================================
// ⚠️ The "Dangerous" continue
let i = 0;
while (i < 5) {
  if (i === 3) {
    continue; // SKIP!
  }
  console.log(i);
  i++;
}
// The Bug: 
// When i hits 3, 
// it hits continue. 
// It jumps back to the top of the loop. 
// But i is still 3. 
// It hits continue again. 
// It never reaches i++. 
// ⚠️ You are now stuck in an infinite loop!
// ============================================================
// Basic Example (The Counter)
let i = 1; // 1. Initialization (Outside)

while (i <= 3) { // 2. Condition
  console.log("Iteration: " + i);
  i++; // 3. Afterthought (Inside)
}
// Result:
// Iteration: 1
// Iteration: 2
// Iteration: 3
```
