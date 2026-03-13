### Same-Value-Zero is the internal comparison algorithm
```js
// ============================================================
// Equality Algorithms: Same-Value-Zero
// ============================================================
// Used by: Set, Map, Array.includes()
// Logic:
// 1. NaN is equal to NaN (Unlike ===)
// 2. 0 is equal to -0   (Unlike Object.is)
// 3. Everything else follows Strict Equality (===)
// ============================================================
```

1. Where is it used?
Array.prototype.includes()
Set operations (adding/deleting items)
Map keys (setting/getting items)

2. The Logic:
NaN = NaN --> True
0   = -0  --> True

```js
const mySet = new Set();
mySet.add(NaN);
mySet.add(NaN);
mySet.add(0);
mySet.add(-0);

console.log(mySet.size); // 2 (Because NaN is the same as NaN here!)
```

3. The Array .includes() Behavior
Before ES6, we used .indexOf(). 
indexOf uses Strict Equality (===), 
so it can't find NaN. 
But the newer .includes() uses Same-Value-Zero.
```js
const numbers = [1, 2, NaN];

console.log(numbers.indexOf(NaN));   // -1 (Can't find it with ===)
console.log(numbers.includes(NaN));  // true (Found it with Same-Value-Zero!)
```
