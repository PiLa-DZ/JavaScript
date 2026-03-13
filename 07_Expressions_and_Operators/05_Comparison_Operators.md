```js
// ============================================================
// Comparison Operators
// ============================================================
// 1. Relational: <, >, <=, >= (Works like C++/Bash).
// 2. Loose (==): Coerces types. Avoid this in backend code.
// 3. Strict (===): Checks Type + Value. Use this 99% of the time.
// 4. Objects: Compared by reference (memory address), not content.
// 5. Tip: null === undefined is false; null == undefined is true.
// ============================================================
```

### ============================================================

In JavaScript, comparison operators always return a Boolean (true or false).

### ============================================================
1. Relational Operators
(>, <, >=, <=)

### ============================================================
2. Equality: The "Twin" Operators

### --------------------------------------------------------
Abstract Equality (==) — "The Loose One"
```js
5 == "5";      // true (String is converted to Number)
1 == true;     // true (Boolean is converted to Number)
null == undefined; // true (Special case)
```

### --------------------------------------------------------
Strict Equality (===) — "The Safe One"
```js
5 === "5";     // false (Number vs String)
1 === true;    // false (Number vs Boolean)
null === undefined; // false
```

### ============================================================
3. Inequality: != vs !==
Just like equality, inequality comes in two flavors:
    !=: Loose inequality (performs coercion).
    !==: Strict inequality (does not perform coercion).

⚠️ Rule for your Wiki: 
    In 99.9% of Node.js development, 
    always use === and !==
    It prevents bugs where a string "0" accidentally 
    passes a check meant for a number 0.
### ============================================================
4. Comparing Objects (Reference vs. Value)
This is a "gotcha" for your personal wiki. 
In JavaScript, 
objects (including Arrays) are compared by Reference, 
not by their content.
```js
const arr1 = [1, 2];
const arr2 = [1, 2];

console.log(arr1 === arr2); // false! They are different "boxes" in memory.

const arr3 = arr1;
console.log(arr1 === arr3); // true! They point to the exact same "box".
```

### ============================================================
### ============================================================
