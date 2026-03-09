### ============================================================
1. The Flattened Promise Solution
We convert every callback into a Promise return. 
Notice how the logic moves down instead of inward.

```js
const fs = require("fs").promises; // Use the native Promise version
// Assume db.query and bcrypt.compare have been "Promisified" (see below)

fs.readFile("config.json", "utf8")
  .then((configString) => {
    const config = JSON.parse(configString);
    // PHASE 1: Database Query
    // We RETURN the promise to keep the chain alive
    return db.query("SELECT * FROM users WHERE id = ?", [config.userId]);
  })
  .then((user) => {
    if (!user) throw new Error("USER_NOT_FOUND");

    // PHASE 2: Password Comparison
    // We return another promise here
    return bcrypt.compare(password, user.hash);
  })
  .then((isMatch) => {
    // PHASE 3: Final Logic
    if (!isMatch) throw new Error("INVALID_PASSWORD");

    res.json({ status: "Logged in" });
  })
  .catch((err) => {
    // ONE TRAP for all errors:
    // File system errors, DB errors, or our custom Throws
    console.error("Auth Failure:", err.message);
    res.status(500).json({ error: "Authentication failed" });
  });
```

### ============================================================
2. How to "Bridge" the Callbacks
If your db or bcrypt libraries don't return Promises natively, 
you use util.promisify. 
It’s like a wrapper that converts a "Callback" engine into a "Promise" engine.

```js
const util = require('util');
const bcrypt = require('bcrypt');

// Transform the old callback style to Promise style
const compare = util.promisify(bcrypt.compare);
// Now 'compare' returns a Promise instead of taking a callback!
```
