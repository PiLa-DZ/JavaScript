```js
// ============================================================
// my_mudule.mjs
export const fun1 = () => console.log(`This is Function 1`)
const fun2 = () => console.log(`This is Function 2`)
const fun3 = () => console.log(`This is Function 3`)
const fun4 = () => console.log(`This is Function 4`)

export { fun2 as default }
```

```js
// ============================================================
// main.mjs
import f, { fun1 } from './my_module.mjs'
fun1() // This is Function 1
f() // This is Function 2
```
