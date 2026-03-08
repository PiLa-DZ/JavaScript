```js
// ============================================================
// JS ARCHITECTURE: CALLBACK HELL (THE PYRAMID)
// ============================================================
// 1. DEFINITION: Deeply nested asynchronous callbacks that
//    make code unreadable and hard to maintain.
// 2. CAUSE: Chaining multiple I/O operations that depend on
//    the result of the previous one.
// 3. V8 IMPACT: Each nested callback creates a closure,
//    increasing memory pressure and making debugging
//    stack traces difficult.
// 4. SOLUTION: Use 'Promises' and 'Async/Await' to flatten
//    the logic and centralize error handling (try/catch).
// ============================================================
```

### ============================================================
1. What it looks like (The "Pyramid")
In a Node.js backend, this usually happens with I/O operations (Database -> File -> Network):

```js
fs.readFile("config.json", (err, config) => {
  if (err) return handle(err);
  
  db.query("SELECT * FROM users WHERE id = ?", [config.userId], (err, user) => {
    if (err) return handle(err);
    
    bcrypt.compare(password, user.hash, (err, isMatch) => {
      if (err) return handle(err);
      
      if (isMatch) {
        res.json({ status: "Logged in" });
      }
    });
  });
});
```

### ============================================================
2. Why it happens (The Systems Perspective)
Callback hell is a direct result of how the Poll Phase works. Because Node is single-threaded, it can't "wait" for the file to read. You must give it a function to call later. If that "later" task also needs to wait, you nest another callback.

V8 Stack: Every nested function creates a new closure, consuming memory.

Error Handling: Notice how you have to check if (err) at every single level. If you forget one, your server might crash or hang silently.

### ============================================================
3. The Modern Solution: Flattening the Stack
On your Latitude E7450, you should be using Promises and Async/Await to transform that horizontal pyramid into vertical, readable code.
```js
try {
  const config = await fs.promises.readFile("config.json");
  const user = await db.query("SELECT *...", [config.userId]);
  const isMatch = await bcrypt.compare(password, user.hash);
  
  if (isMatch) res.json({ status: "Logged in" });
} catch (err) {
  handle(err); // One central place for errors!
}
```

