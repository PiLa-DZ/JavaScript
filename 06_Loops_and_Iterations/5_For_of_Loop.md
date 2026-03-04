```js
// ============================================================
// The 'for...of' Loop (ES6)
// ============================================================
// Syntax: for (const item of iterable) { ... }
// 
// 1. Used for: Arrays, Strings, Maps, Sets.
// 2. Best for: When you want the VALUE, not the index.
// 3. Benefit: Supports 'break', 'continue', and 'await'.
// 4. ⚠️ Note: Does NOT work on plain Objects (use for...in).
// ============================================================
for (const element of iterable) {
  // code to run for each element
}
// ============================================================
const msg = "Arch 🐧";

for (const char of msg) {
  console.log(char);
}
// Outputs:
// A
// r
// c
// h
//
// 🐧
// ============================================================
```
