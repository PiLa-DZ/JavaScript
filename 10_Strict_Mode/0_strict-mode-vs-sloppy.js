// "use strict"; // To use strict mode uncomment this line
/**
 * THE SLOPPY MODE WALL OF SHAME
 * A guide for moving from JavaScript to TypeScript.
 * * To see the Strict Mode version of this file,
 * simply add "use strict"; to the very top.
 */

// ---------------------------------------------------------
// 1. ACCIDENTAL GLOBALS
// ---------------------------------------------------------
function leakVariable() {
  // Forgot 'const' or 'let'
  leakedDistro = "Arch Linux";
}
leakVariable();
console.log("1. Leaked Variable:", global.leakedDistro);
// In Strict Mode: ReferenceError: leakedDistro is not defined

// ---------------------------------------------------------
// 2. SILENT ASSIGNMENT FAILURES
// ---------------------------------------------------------
const system = {};
Object.defineProperty(system, "kernel", { value: "LTS", writable: false });

system.kernel = "Zen"; // Fails silently in Sloppy Mode
console.log("2. Read-only property remains:", system.kernel);
// In Strict Mode: TypeError: Cannot assign to read only property

// ---------------------------------------------------------
// 3. THE "IDENTITY CRISIS" (DUPLICATE PARAMETERS)
// ---------------------------------------------------------
function connect(port, port) {
  // The second 'port' overwrites the first
  console.log("3. Duplicate param result:", port);
}
connect(80, 443); // Output: 443
// In Strict Mode: SyntaxError: Duplicate parameter name not allowed

// ---------------------------------------------------------
// 4. THE SECURITY LEAK (GLOBAL 'THIS')
// ---------------------------------------------------------
function checkContext() {
  // In Sloppy mode, 'this' defaults to the Global object
  return this === global;
}
console.log("4. Is 'this' the Global Object?:", checkContext());
// In Strict Mode: 'this' is undefined, so checkContext returns false.

// ---------------------------------------------------------
// 5. THE MATH MYSTERY (OCTAL LITERALS)
// ---------------------------------------------------------
let permissions = 0755;
console.log("5. Why is 0755 suddenly", permissions, "?");
// In Sloppy Mode: 0755 is treated as Octal (Base 8).
// In Strict Mode: SyntaxError: Octal literals are not allowed.

// ---------------------------------------------------------
// 6. DELETING THE UNDELETABLE
// ---------------------------------------------------------
var importantConfig = "do-not-delete";
delete importantConfig; // Fails silently
console.log("6. Did delete work?:", importantConfig);
// In Strict Mode: SyntaxError: Delete of an unqualified identifier

// ---------------------------------------------------------
// 7. THE BANNED 'WITH' STATEMENT
// ---------------------------------------------------------
const arch = { version: "Rolling" };
with (arch) {
  console.log(version);
}
// In Strict Mode: SyntaxError: Strict mode code may not include a with statement

// ---------------------------------------------------------
// SUMMARY FOR FRIENDS:
// ---------------------------------------------------------
/*
  SLOPPY MODE: 
  - Fails silently (Hard to debug).
  - Leaks memory (Accidental globals).
  - Insecure (Global 'this' access).
  - Slow (Compiler cannot optimize ambiguous code).

  STRICT MODE (The TypeScript Pre-requisite):
  - Throws loud errors (Easy to debug).
  - Keeps memory clean.
  - Secure context.
  - Faster execution (V8 optimization).
*/
