```js
// ============================================================
// Control Flow: switch
// ============================================================
// 1. Comparison: Uses Strict Equality (===).
// 2. break: Required to prevent "Fall-through".
// 3. default: The optional fallback if no cases match.
// 4. Grouping: Multiple cases can share one block of code.
// ============================================================
// 1. The Anatomy of a switch Statement
switch (expression) {
  case value1:
    // code to run
    break;
  case value2:
    // code to run
    break;
  default:
    // code to run if nothing matches
}
// ------------------------------------------------------------
// The Components:
// Expression: The variable you are checking (e.g., command).
// Case: The specific value you are looking for.
// Break: This is critical. It tells the engine, "I found the match, now jump out of the switch."
// Default: The "fallback" option (like the else at the end of an if chain).
// ============================================================
// 2. The "Strict Equality" Rule
let code = "1";

switch (code) {
  case 1:
    console.log("This will NOT run (Number vs String)");
    break;
}
// ============================================================
// 3. The Power of "Fall-through"
const distro = "arch";

switch (distro) {
  case "arch":
  case "manjaro":
  case "endeavour":
    console.log("This is an Arch-based system.");
    break;
  case "fedora":
    console.log("This is RPM-based.");
    break;
  default:
    console.log("Unknown distro.");
}
// ============================================================
// 4. Why the break is so important
let level = 1;
switch (level) {
  case 1:
    console.log("Level 1");
    // Missing break!
  case 2:
    console.log("Level 2"); // This will ALSO run!
    break;
}
```
