```js
// ============================================================
// Built-in (Predefined) Functions
// ============================================================
// 1. parseInt / parseFloat: Convert strings to numbers. 
//    Always use radix 10 for parseInt.
// 2. encodeURIComponent: Safe way to inject data into URLs.
// 3. isNaN / isFinite: Essential for data validation.
// 4. eval(): AVOID USE. High security risk.
// ============================================================
```

Built-in functions (also known as Predefined functions)

Here are the most critical ones you need for your wiki:

### ============================================================
1. Number Conversion Functions

### --------------------------------------------------------
parseInt(string, radix)
```js
const port = parseInt("8080", 10); // 8080
const hexValue = parseInt("0xFF", 16); // 255
```

### --------------------------------------------------------
parseFloat(string)
```js
const version = parseFloat("6.1.12-arch"); // 6.1
```

### ============================================================
2. URI Handling Functions
In backend development, 
you'll constantly work with URLs. 
These functions ensure that special characters 
(like spaces or emojis) 
don't break your web addresses.

- encodeURI(): Encodes a full URL (keeps :, /, ? intact).
- decodeURI(): Reverts the encoding.
- encodeURIComponent(): Encodes everything, including separators. Used for query parameters.

```js
const query = "arch linux & neovim";
const url = `https://google.com/search?q=${encodeURIComponent(query)}`;
// Result: ...?q=arch%20linux%20%26%20neovim
```

### ============================================================
3. The "Evaluation" Function: eval()

eval() executes a string as if it were JavaScript code.

⚠️ Security Warning for your Wiki: 
    Never use eval() 
    in a backend environment with user-provided data. 
    It is a massive security vulnerability (Injection attacks). 
    In 2026, there is almost always a better, 
    safer way to do what you want.
```js
eval("console.log('Danger!')");
```

### ============================================================
4. Infinity and NaN Checkers
Since JavaScript numbers can sometimes result in Infinity 
or NaN (Not a Number), 
these functions help you validate your logic.
    isNaN(): Returns true if the value is not a number.
    isFinite(): Returns true if the value is a regular, finite number.
```js
console.log(isNaN("Hello")); // true
console.log(isFinite(1/0));  // false (it's Infinity)
```

