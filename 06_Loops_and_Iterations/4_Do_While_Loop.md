```js
// ============================================================
// The 'do...while' Loop
// ============================================================
// Syntax: do { ... } while (condition);
// 
// 1. Guarantees AT LEAST ONE execution of the code block.
// 2. Useful for: Input validation or initial setup tasks.
// 3. ⚠️ Note: Don't forget the semicolon after the while condition!
// ============================================================

let i = 10;

// Standard While
while (i < 5) {
  console.log("While: This will never run.");
  i++;
}

// Do...While
do {
  console.log("Do...While: This runs once even though 10 < 5 is false!");
  i++;
} while (i < 5);

// Result:
// Do...While: This runs once even though 10 < 5 is false!
```
