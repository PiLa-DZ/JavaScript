```js
// ============================================================
// Bitwise Operators (32-bit Integers)
// ============================================================
// 1. Logic: & (AND), | (OR), ^ (XOR), ~ (NOT).
// 2. Shifts: << (Left), >> (Right), >>> (Unsigned Right).
// 3. Efficiency: Extremely fast for math and flags.
// 4. Note: JS numbers are 64-bit, but Bitwise converts them 
//    to 32-bit temporarily.
// ============================================================
// & (AND)
// | (OR)
// ^ (XOR)
// ~ (NOT)
// << (Left SHIFT)
// >> (Right SHIFT)
// >>> (Zero-Fill Right SHIFT
```
### ============================================================
1. The Core Bitwise Logic
JavaScript converts the number to a 32-bit signed integer, 
performs the operation, 
and then converts it back to a standard JavaScript number.
```js
/*
// ============================================================
  Operator | Name | Logic
 ----------+------+--------------------------------------------
  &        | AND  | 1 if both bits are 1.
  |        | OR   | 1 if at least one bit is 1.
  ^        | XOR  | 1 if bits are different.
  ~        | NOT  | "Inverts all bits (0 becomes 1, 1 becomes 0)."
// ============================================================
*/
```

### ============================================================
2. Bitwise Shift Operators
These move the bits to the left or right, 
which is mathematically equivalent to multiplying or dividing by powers of 2.
```js
/*
  << (Left Shift): Shifts bits to the left and fills with zeros from the right.
        5 << 1 (Binary 101 becomes 1010) = 10

  >> (Sign-propagating Right Shift): Shifts bits to the right, keeping the leftmost bit (the sign).

  >>> (Zero-fill Right Shift): 
        Shifts bits to the right and fills the left with zeros. This always results in a positive number.
*/
```

### ============================================================
3. Practical Use: Permission Flags
In a Node.js backend, 
you can store multiple "permissions" in a single number using bitwise operators
exactly like Linux file permissions.
```js
const READ    = 0b001; // 1
const WRITE   = 0b010; // 2
const EXECUTE = 0b100; // 4

// Assign Read and Write using OR (|)
let myPermissions = READ | WRITE; // 0b011 (3)

// Check for Write permission using AND (&)
const canWrite = (myPermissions & WRITE) !== 0; 

console.log(canWrite); // true
```

### ============================================================
4. The ~ (Bitwise NOT) Trick
A common "old-school" JavaScript trick 
uses the Bitwise NOT to check 
if a value exists in a string or array (before .includes() existed).

~-1 results in 0 (which is Falsy).
```js
const str = "Arch Linux";
if (~str.indexOf("Arch")) { 
  console.log("Found it!"); 
}
// Note: This is clever but less readable than str.includes("Arch"). Use it sparingly!
```

