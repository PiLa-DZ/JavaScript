```js
// ============================================================
// Loop Control: break vs. continue
// ============================================================
// break:    Exit the loop COMPLETELY.
// continue: Skip to the NEXT iteration immediately.
//
// Tip: In nested loops, break/continue only affect the 
//      innermost loop they are inside of.
// ============================================================
// 1. break: The "Emergency Exit"
const packages = ["htop", "neovim", "tmux", "zsh"];

for (let i = 0; i < packages.length; i++) {
  if (packages[i] === "neovim") {
    console.log("Found it! Stopping search.");
    break; // The loop stops here; it never looks at "tmux" or "zsh"
  }
  console.log("Checking: " + packages[i]);
}
// Result:
// Checking: htop
// Found it! Stopping search.
// ============================================================
// 2. continue: The "Skip Lap"
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping Workspace 3 (Reserved)");
    continue; // Jumps straight to i++ (i becomes 4)
  }
  console.log("Setting up Workspace " + i);
}
// Output:
// Setting up Workspace 1
// Setting up Workspace 2
// Skipping Workspace 3 (Reserved)
// Setting up Workspace 4
// Setting up Workspace 5
```
