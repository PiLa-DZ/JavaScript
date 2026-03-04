```js
// ============================================================
// Unary Operators (Single Operand)
// ============================================================
// 1. Delete Operator (delete)
// 2. Typeof Operator (typeof)
// 3. Void Operator (void)
// 4. Unary Plus and Negation (+, -)
// 5. Increment and Decrement (++, --)
// 6. Logical NOT (!)
// ============================================================
```
### ============================================================
1. Delete Operator (delete)
In JavaScript, delete is used to remove a property from an object.
```js
const nvimConfig = { theme: "gruvbox", transparency: true };
delete nvimConfig.transparency;

console.log(nvimConfig); // { theme: "gruvbox" }
```
Warning for your Wiki: delete only works on object properties. It does not delete variables declared with let, const, or var, and it doesn't actually free up memory (that's handled by the Garbage Collector).

### ============================================================
2. Typeof Operator (typeof)
This is your primary diagnostic tool. 
It returns a string indicating the type of the unevaluated operand.
```js
typeof 42;          // "number"
typeof "Arch";      // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof { a: 1 };    // "object"
typeof [1, 2, 3];   // "object" (Arrays are objects in JS!)
typeof function(){};// "function"
```

### ============================================================
3. Void Operator (void)
The void operator evaluates an expression and then returns undefined. 
You'll rarely see this in modern Node.js, 
but it’s sometimes used to prevent a link from refreshing a page 
in the browser or to ensure a function returns undefined.
```js
void (0); // returns undefined
```

### ============================================================
4. Unary Plus and Negation (+, -)
These are used to convert operands into numbers. 
The unary plus (+) is actually the fastest way to turn a string into a number in JavaScript.
```js
const str = "55";
const num = +str; // 55 (number)

const neg = -num; // -55
```

### ============================================================
5. Increment and Decrement (++, --)
You’ve seen these in your for loops. The position matters:
    Postfix (i++): Returns the value before incrementing.
    Prefix (++i): Returns the value after incrementing.
```js
let x = 5;
let y = x++; // y is 5, x becomes 6

let a = 5;
let b = ++a; // b is 6, a is 6
```

### ============================================================
6. Logical NOT (!)
This operator "flips" the truthiness of a value. 
A double NOT (!!) is a common trick to convert any value into its actual Boolean equivalent.
```js
const user = "Gemini";
console.log(!user);  // false
console.log(!!user); // true (converts "truthy" string to true)
```

