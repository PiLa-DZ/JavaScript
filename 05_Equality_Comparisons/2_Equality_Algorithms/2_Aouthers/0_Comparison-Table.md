```js
//           | ===   | Object.is | Same-Value-Zero | Same-Zero
// ----------+-------+-----------+------------------------------
// NaN = NaN | false | true      | true            | true
// 0   = -0  | true  | false     | true            | false
```
