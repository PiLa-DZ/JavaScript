### ============================================================
### 1. The "number" Hint

Operations: 
    Math       (-, *, /, **, %), 
    Relational (>, <, >=, <=),
    Unary Plus (+obj).

The Goal: It wants a Number.
The Search: valueOf() --> toString().
```js
const obj = {
  valueOf: () => 42,
  toString: () => "forty-two"
};

console.log(obj * 2); // 84 (Uses valueOf)
```

### ============================================================
### 2. The "string" Hint

Operations: 
    Template literals (`${obj}`), String(obj), or setting an object as a property key map[obj].

The Goal: It wants a String.
The Search: toString() --> valueOf().

```js
const obj = {
  valueOf: () => 42,
  toString: () => "forty-two"
};

console.log(`${obj}`); // "forty-two" (Uses toString)
```

### ============================================================
### 3. The "default" Hint

Operations: 
    Binary Plus (obj + 2) and Loose Equality (obj == 2).

The Goal: 
    The engine isn't sure yet 
    if it wants a string or a number, 
    so it asks the object for its "default" primitive.

The Search: if Date (toString)
            else    (valueOf --> toString).

