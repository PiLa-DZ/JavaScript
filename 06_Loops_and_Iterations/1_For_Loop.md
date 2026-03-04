```js
// ============================================================
// The Standard 'for' Loop
// ============================================================
// Syntax: for (init; condition; step) { ... }
// 
// 1. Initialization: let i = 0 (Setup)
// 2. Condition: i < limit (The "Should I keep going?" check)
// 3. Step: i++ (The "Update" after each lap)
//
// Best for: When you need the index (i) or total manual control.
// ============================================================
for (let i = 1; i <= 3; i++) {
  console.log("Switching to Workspace: " + i);
}
// Result:
// Switching to Workspace: 1
// Switching to Workspace: 2
// Switching to Workspace: 3
// ============================================================
const packages = ["neovim", "tmux", "zsh"];

for (let i = 0; i < packages.length; i++) {
  console.log(`Installing: ${packages[i]}`);
}
// Result:
// Installing: neovim
// Installing: tmux
// Installing: zsh
// ============================================================
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skip workspace 3
  if (i === 5) break;    // Stop completely before 5
  console.log("Workspace " + i);
}
// Output: Workspace 1, Workspace 2, Workspace 4
// ============================================================
// for loop empty: for (;;) { ... }.
let i = 0;
for (;;) {
  if (i < 3) {
    console.log(`Number ${i}`);
  } else {
    console.log("Loop finished!");
    break; // This exits the loop entirely
  }
  i++;
}
// Output:
// Number 0
// Number 1
// Number 2
// Loop finished!
```
