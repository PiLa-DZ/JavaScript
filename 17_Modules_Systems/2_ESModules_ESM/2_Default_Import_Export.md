### Default Export (The "Main Product")

```js
// ============================================================
// my_module1.mjs
// Only one default export per module
export default () => console.log(`This is Function 1`)
const fun2 = () => console.log(`This is Function 2`)
const fun3 = () => console.log(`This is Function 3`)
const fun4 = () => console.log(`This is Function 4`)
```

```js
// ============================================================
// my_module2.mjs
const fun1 = () => console.log(`This is Function 1`)
const fun2 = () => console.log(`This is Function 2`)
const fun3 = () => console.log(`This is Function 3`)
const fun4 = () => console.log(`This is Function 4`)

 // Or with a named function/class/object
export default fun2
```

```js
// ============================================================
// main.mjs
import f1 from './my_module1.mjs'
import f2 from './my_module2.mjs'

f1() // This is Function 1
f2() // This is Function 2
```
