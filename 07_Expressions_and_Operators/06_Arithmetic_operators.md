```js
// ============================================================
// Arithmetic Operators
// ============================================================
// 1. Standard: +, -, *, /
// 2. Modulo (%): Returns the remainder (Great for even/odd).
// 3. Exponent (**): Calculates powers (2 ** 3 = 8).
// 4. Trap: + will concatenate strings, while - will subtract numbers.
// 5. NaN: Result of invalid math (e.g., "hello" * 2).
// ============================================================

// ============================================================
// The Floating-Point Problem (0.1 + 0.2)
// ============================================================
// Name: IEEE 754 Binary Floating-Point Imprecision.
// Cause: Base-2 cannot perfectly represent 0.1 or 0.2.
//
// Solutions:
// 1. Integers: Work in cents (x100), then divide (/100).
// 2. Rounding: use .toFixed(n) for display.
// 3. Precision: Use Number.EPSILON for comparisons.
// ============================================================

// + (Addition)
// - (Subtraction)
// * (Multiplication)
// ** (Exponentiation)
// / (Division)
// % (Modulus i.e. Remainder)
// ++ (Increment)
// -- (Decrement)

```
### ============================================================
1. Standard Binary Operators
These take two operands and return a numerical result.
```js
/*
// ============================================================
           |                    |         |
  Operator | Name               | Example | Result
 ----------+--------------------+---------+----------------------
  +        | Addition           | 10 + 5  | 15
  -        | Subtraction        | 10 - 5  | 5
 ----------+--------------------+---------+----------------------
  *        | Multiplication     | 10 * 5  | 50
  /        | Division           | 10 / 2  | 5
 ----------+--------------------+---------+----------------------
  %        | Remainder (Modulo) | 10 % 3  | 1
  **       | Exponentiation     | 2 ** 3  | 8
           |                    |         |
// ============================================================
*/
```

### ============================================================
2. Floating-Point Imprecision (or the 0.30000000000000004 problem).

### --------------------------------------------------------
Method A: The "Integer" Strategy (Recommended)
```js
const price1 = 0.1;
const price2 = 0.2;

// Convert to cents, add, then convert back
const total = ( (price1 * 100) + (price2 * 100) ) / 100;

console.log(total); // 0.3
```

### --------------------------------------------------------
Method B: The .toFixed() Method
```js
const result = (0.1 + 0.2).toFixed(2); 

console.log(result); // "0.30" (Note: this is now a STRING)
console.log(+result); // 0.3 (The unary plus + converts it back to a Number)
```
