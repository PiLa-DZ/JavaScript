### ============================================================
1. The "Before" vs. "After" (The Evolution)

### --------------------------------------------------------
- The Old Way (Pre-ESM Standard)
You couldn't just "wait" at the top of your file. 
You had to create a "Wrapper" 
(like that IIFE we saw earlier) 
just to use await.
```js
// main.mjs (Old Style)
async function startApp() {
    const data = await fetch('https://api.iphone.com/prices');
    console.log(data);
}
startApp();
```

### --------------------------------------------------------
- The New Way (Top-Level Await)
Now, in an .mjs file (ES Module), 
you can just use await directly in the main body of the file. 
No wrapper needed.
```js
// main.mjs (Modern Style)
const data = await fetch('https://api.iphone.com/prices');
console.log(data); // This waits for the fetch to finish before running
```

### ============================================================
2. Why is this a "Game Changer"?

In a professional "iPhone Factory" app, 
you often need to load configuration 
or connect to a database before the rest of the app starts.

Example: Connecting to a Database
```js
// ============================================================
// db.mjs
const connection = await db.connect("arch_linux_db");
export default connection;

// ============================================================
// When another file imports this:
// ============================================================
// app.mjs
import connection from './db.mjs';

// The 'import' itself will wait for the connection to be ready!
connection.query("SELECT * FROM iphones");

```

### ============================================================
3. The Rules of Top-Level Await

Only in Modules: 
    It only works in ES Modules 
    (.mjs files or files in a project with "type": "module" in package.json). 
    It will crash in a regular CommonJS script.

Blocks Execution: 
    When a module uses top-level await, 
    any other module that imports it will wait until the await finishes. 
    It’s like a "System Pause" until the dependency is ready.

Error Handling: 
    Since there is no function wrapping it, 
    you should use a global try...catch 
    to make sure a network failure doesn't kill your whole process.
