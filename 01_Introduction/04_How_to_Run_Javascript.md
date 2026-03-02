1. (Server-Side / CLI) The Runtimes
Node.js: The industry standard.
    Run: node script.js
Bun: Written in Zig, incredibly fast, and has a built-in package manager and test runner. It’s a favorite for those who like "minimalist but powerful" tools.
    Run: bun run script.js
Deno: Created by the original maker of Node to fix its security flaws. It supports TypeScript natively without a separate tsc step.
    Run: deno run script.ts

2. The Browser (Client-Side)
This is the "native" home of JavaScript. Every browser has an engine (like V8 in Chrome/Brave or SpiderMonkey in Firefox).
The Console: Press F12 (or Ctrl+Shift+I) and go to the Console tab. You can type JS directly and hit Enter to execute it.
Linking to HTML: To run JS as part of a webpage, you use the <script> tag.
```HTML
<!DOCTYPE html>
<html>
  <body>
    <h1>My Site</h1>
    <script src="app.js"></script>
  </body>
</html>
```

3. Integrated in Neovim (REPLs)
Since you are a Neovim user, you don't necessarily have to leave your editor to run code.
* SnipRun: A plugin that lets you highlight a block of JS/TS code and run it instantly, displaying the output in a floating window or virtual text.
* ToggleTerm: Many Arch users use toggleterm.nvim to quickly pull up a terminal overlay, run node, and hide it again.
* Neodev/LazyVim: If you use these, you might have a "code runner" keybinding (often <leader>r) configured to execute the current file.
