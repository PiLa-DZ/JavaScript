```js
// ============================================================
// BigInt Operators
// ============================================================
// 1. Creation: Append 'n' to a number (e.g., 10n).
// 2. Precision: Use for integers > 2^53 - 1.
// 3. Limitation: Cannot mix with Numbers (10n + 1 will fail).
// 4. Division: Always returns an integer (truncates decimals).
// 5. Bitwise: Supports all except >>> (Zero-fill right shift).
// ============================================================
// ⚠️ JSON.stringify() does not support BigInt by default. 
```
### ============================================================

BigInt allows you to work with integers of arbitrary length.

### ============================================================
1. Creating a BigInt
You create a BigInt by appending an n to the end of an integer literal 
or by using the BigInt() constructor.
```js
const tooBig = 9007199254740991n; 
const alsoBig = BigInt("9007199254740991");
```

### ============================================================
2. Supported Operators
Most of the arithmetic and bitwise operators you just learned work exactly the same way with BigInts.
Arithmetic: +, -, *, **, %
Bitwise: &, |, ^, ~, <<, >> (Note: >>> is not supported because BigInts are always signed).
Comparison: >, <, >=, <=
```js
const a = 100n;
const b = 50n;

console.log(a + b); // 150n
console.log(a ** b); // A massive number ending in 'n'
```

### ============================================================
3. The "Golden Rules" (Important for your Wiki)

### --------------------------------------------------------
A. No Mixing Types
You cannot mix BigInts with regular Numbers in arithmetic operations. 
This is a safety feature to prevent accidental loss of precision.
```js
const result = 10n + 5; // ❌ TypeError: Cannot mix BigInt and other types
const fixed = 10n + BigInt(5); // ✅ 15n
```
### --------------------------------------------------------
B. Integer Division
Since BigInt is for integers, division does not return a decimal. It truncates (rounds toward zero), just like integer division in C++.
```js
console.log(5n / 2n); // 2n (The .5 is dropped)
```
### --------------------------------------------------------
C. Loose Equality works, Strict Equality fails
```js
console.log(0n == 0);  // true (Value is the same)
console.log(0n === 0); // false (Types are different: BigInt vs Number)
```

### ============================================================
4. Real-World Node.js Use Case: Twitter/Snowflake IDs
Many databases use 64-bit integers for IDs. If you try to fetch an ID like 152637485960718293 as a standard JS Number, it might get rounded to 152637485960718300. Using BigInt ensures your backend handles the ID exactly as it is stored in the database.

### ============================================================
⚠️ Pro-Tip for your Workflow
JSON.stringify() does not support BigInt by default. 
If you try to send a BigInt in a JSON response in your Node.js API, 
it will throw an error. 
You have to convert it to a string first: id: someBigInt.toString().
