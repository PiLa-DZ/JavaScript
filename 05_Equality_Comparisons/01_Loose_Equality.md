### Loose Equality (==)

### 1. What is Loose Equality (==)?
The == operator compares two values for equality 
after converting both values to a common type. 
This process is called `Type Coercion`
1. Step 1: Check if the types are the same. If yes, compare them.
2. Step 2: If types are different, 
    "coerce" one or both into a different type (usually numbers) and try again.

### 2. The "Insane" Coercion Rules
When you use ==, 
JavaScript follows a complex set of rules 
called the Abstract Equality Comparison Algorithm. 
Here are the most common (and confusing) results:

```js
// ============================================================
// A. String vs. Number
// JavaScript converts the string to a number.
"42" == 42; // true
// Logic: Number("42") is 42. 42 === 42 is true.

// ============================================================
// B. Boolean vs. Anything
// JavaScript converts the boolean to a number (true becomes 1, false becomes 0).
true == 1;   // true
false == 0;  // true
"1" == true; // true (Both become the number 1)

// ============================================================
// C. Null and Undefined
// This is actually one of the few "useful" parts of ==. 
// null and undefined are equal to each other, but nothing else.
null == undefined; // true
null == 0;         // false
undefined == 0;    // false
```

### 3. == is Dangerous (The Pitfalls)
