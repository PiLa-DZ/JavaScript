```js
/*
 * Dynamic Loading
 *
 * Dynamic Imports allow you to:
 *
 * * Reduce Memory: 
 *      Only load code when needed.
 *
 * * Handle Errors: 
 *      If a module is missing, 
 *      the whole app doesn't crash (the try/catch handles it).
 *
 * * Variable Paths: 
 *      You can decide which file 
 *      to load based on a variable (like moduleName).
 *
 */
// ============================================================
// my_module.mjs
export default () => console.log('This is default function')
export const fun1 = () => console.log(`This is Function 1`)
export const fun2 = () => console.log(`This is Function 2`)
export const fun3 = () => console.log(`This is Function 3`)
export const fun4 = () => console.log(`This is Function 4`)
```

```js
// ============================================================
// main.mjs

// ------------------------------------------------------------
// Way 1: The "Functional Wrapper" (using .then())
async function loadModule(moduleName) {
  try {
    const myModule = await import(`./${moduleName}.mjs`)
    return myModule
  }
  catch(err) {
    console.log(`Failed to lead ${moduleName} : `, err)
  }
}

const moduleName = 'my_module'

loadModule(moduleName).then(myModule => {
  myModule.default()
  myModule.fun2()
})

// ------------------------------------------------------------
// Way 2: The "Immediate Sandbox" (using await)
const moduleName = 'my_module'
;(async () => {
    const myModule = await import('./my_module.mjs')
    myModule.fun1()
})()

```
