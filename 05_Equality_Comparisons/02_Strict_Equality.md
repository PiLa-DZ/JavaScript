### Strict Equality Operator (===)
1. Are the Types the same?
2. Are the Values the same?

### 1. How it Works
the === operator follows the Strict Equality Comparison Algorithm. It performs no type conversion.
```js
// Types are different (String vs Number)
console.log("5" === 5); // false
// Types are the same, values are the same
console.log(5 === 5);   // true
// Types are the same, values are different
console.log(10 === 5);  // false
```

### 3. The "Reference" Rule (Objects and Arrays)
This is a common trap for new JavaScript learners.
In JavaScript, objects are compared by Reference (where they sit in memory), not by their contents.
```js
const listA = [1, 2];
const listB = [1, 2];
const listC = listA;

listA === listB // false (Different spots in memory)
listA === listC // true (Points to the exact same spot)
```

### 4. The NaN Exception
There is one famous case where === fails: NaN (Not a Number).
NaN is the only value in JavaScript that is not equal to itself.
```js
NaN === NaN       // false
Number.isNaN(NaN) // true
```

### 5. you should ALWAYS use ===
