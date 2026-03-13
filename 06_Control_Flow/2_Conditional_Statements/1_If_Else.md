```js
// ============================================================
// Control Flow: if...else
// ============================================================
// Syntax: if (condition) { ... } else if (cond) { ... } else { ... }
// 
// 1. Condition: Evaluates to true or false.
// 2. Truthy/Falsy: Values like 0, "", null, undefined are Falsy.
// 3. Ternary: (condition) ? trueValue : falseValue;
// ============================================================

const windowsOpen = 4;

if (windowsOpen === 0) {
  console.log("No windows active.");
} else if (windowsOpen < 5) {
  console.log("A few windows open.");
} else {
  console.log("Too many windows! Your RAM is crying.");
}
// Result:
// A few windows open.

// ============================================================

const isServiceActive = true;
const status = (isServiceActive) ? "Running" : "Stopped";
// Result: 
// Running

// ============================================================
```
