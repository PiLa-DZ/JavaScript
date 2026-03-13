### Named Exports (The "Multi-Tool")

```js
// ============================================================
// my_module.mjs
export const fun1 = () => console.log(`This is Function 1`)

export const fun2 = () => console.log(`This is Function 2`)

const fun3 = () => console.log(`This is Function 3`)

const fun4 = () => console.log(`This is Function 4`)

export { fun3, fun4 }
```

```js
// ============================================================
// main.mjs
// Import specific named exports
import { fun1, fun2 } from './my_module.mjs'
fun1() // This is Function 1
fun2() // This is Function 2

// Rename imports to avoid naming conflicts
import { fun3 as f3, fun4 as f4 } from './my_module.mjs'
f3() // This is Function 3
f4() // This is Function 4

// Import all named exports as an object
import * as f from './my_module.mjs'
f.fun1() // This is Function 1
f.fun2() // This is Function 2
f.fun3() // This is Function 3
f.fun4() // This is Function 4
```

