# Data Types

## Primitive

- string
- number
- boolean
- undefined
- null
- bigint
- symbol

## Objects

- Object
- RegExp
- Number
- BigInt
- Math
- Date
- String
- Error
- Function
- Boolean

## Typeof

```js
typeof 42; // "number"
typeof "Arch Linux"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof { a: 1 }; // "object"
typeof function () {}; // "function"

// BUG: Be careful
typeof null; // "object": This is a 30-year-old bug from the original implementation.
null === null; // true

typeof NaN; // "number": Even though NaN stands for "Not a Number," it is technically a numeric data type in the IEEE 754 standard.
NaN === NaN; // false
Number.isNaN(NaN); // true

typeof Infinity; // "number"
!Number.isFinite(Infinity); // true

typeof [1, 2, 3]; // "object" (Arrays are objects!)
```

## Prototype

- `.__proto__`: Instance points to where the object inherits from.
- `.prototype`: Constructor (Functions, Classes)
- NOTE: Prototype Chain (Memory Efficiency)
