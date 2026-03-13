```js
// ============================================================
// String Operators
// ============================================================
// 1. + (Concatenation): Joins two strings.
// 2. += (Assignment): Appends to an existing string.
// 3. Coercion: "5" + 5 = "55". The string always wins with +.
// 4. Preferred: Use Template Literals (`${var}`) for cleaner code.
// ============================================================
```
### ============================================================
1. The Concatenation Operator (+)
```js
let distro = "Arch" + " " + "Linux";
console.log(distro); // "Arch Linux"
```

### ============================================================
⚠️ The "Coercion" Trap
If you use + with a string and any other data type (number, boolean, etc.),
JavaScript will automatically convert the other type into a string and join them.
```js
console.log("Error code: " + 404); // "Error code: 404" (String)
console.log("Status: " + true);    // "Status: true" (String)
```

### ============================================================
2. The Assignment Operator (+=)
Just like with numbers, 
you can use the shorthand += to append a string to an existing variable. 
This is common when building up a long terminal message or a block of HTML/JSON.
```js
let log = "Initializing system...\n";
log += "Loading kernel modules...\n";
log += "Welcome to Arch.";

console.log(log);
```

### ============================================================
3. Beyond Operators: Template Literals (The "Modern" Way)
While + is a traditional operator, 
most Node.js developers now prefer Template Literals using backticks (`). 
These aren't technically "operators," 
but they are the superior way to handle strings in 2026.
- Interpolation: Embed variables directly using ${}.
- Multi-line: No need for \n.
```js
const user = "root";
const host = "arch-box";

// The "C++" way
const prompt1 = user + "@" + host + ":~$ ";

// The modern JS way
const prompt2 = `${user}@${host}:~$ `;
```

