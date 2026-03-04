### Type Coercion (Implicit) (Implicit Type Casting)
This is when JavaScript automatically converts a value 
behind the scenes to make an operation work. 
This is the source of many "JS is weird" memes.

The Two Golden Rules of Coercion:
1. The + operator favors Strings: 
    If any operand is a string, 
    the others are converted to strings (Concatenation).
    ```js
    "5" + 2     // "52"
    false + "1" // "false1"
    ```
2. Other operators (-, *, /, >, <) favor Numbers:
    ```js
    "10" - 5    // 5
    "10" * "2"  // 20
    true + 1    // 2 (because true is coerced to 1)
    ```

## Truthy vs. Falsy
In a conditional (like an if statement), JavaScript coerces any value into a Boolean.
Falsy values: false, 0, -0, 0n (BigInt), "" (empty string), null, undefined, and NaN.
Truthy values: Everything else—including [] (empty array), {} (empty object), and "0" (string with zero).

## Equality: == vs ===
- == (Loose Equality): Performs type coercion before comparing.
```js
"1" == 1          // true
null == undefined // true
```
- JS Comparison Table
https://dorey.github.io/JavaScript-Equality-Table/

- === (Strict Equality): No coercion. If the types are different, it’s false.
```js
"1" === 1 // false
```
