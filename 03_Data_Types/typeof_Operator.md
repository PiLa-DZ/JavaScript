### 1. How it works in JavaScript (Runtime)
```js
typeof 42             // "number"
typeof "Arch Linux"   // "string"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof { a: 1 }       // "object"
typeof [1, 2, 3]      // "object" (Arrays are objects!)
typeof function(){}   // "function"
```

### The "Bugs" of History
```js
typeof null    // "object": This is a 30-year-old bug from the original implementation.
null === null  // true

typeof NaN        // "number": Even though NaN stands for "Not a Number," it is technically a numeric data type in the IEEE 754 standard.
NaN === NaN       // false
Number.isNaN(NaN) // true

typeof Infinity            // "number"
!Number.isFinite(Infinity) // true
```

