Object.is
The Object.is() static method determines whether two values are the same value.

```js
console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false

```

### 1. The Two Differences
There are only two scenarios where Object.is(a, b) 
gives a different result than a === b.

```js
// A. The NaN Case
NaN === NaN         // false (The weird JS rule)
Object.is(NaN, NaN) // true (The logical fix)

// B. The Signed Zero Case
0 === -0         // true
Object.is(0, -0) // false
```

