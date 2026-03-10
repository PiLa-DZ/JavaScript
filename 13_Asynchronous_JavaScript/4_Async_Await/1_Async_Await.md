### ============================================================
1. The "Keyword" Contract
To use await, 
you must be inside an async function.

async: Automatically wraps the function's return value in a Promise.resolve().
await: Pauses the execution of the function (not the whole thread!) until the Promise settles.

```js
// This is your professional "Arch-style" backend logic
async function loginUser(userId, password) {
  try {
    // 1. Read Config (Wait for it)
    const configRaw = await fs.readFile("config.json", "utf8");
    const config = JSON.parse(configRaw);

    // 2. Fetch User (Wait for it)
    const user = await db.query("SELECT * FROM users WHERE id = ?", [config.userId]);
    if (!user) throw new Error("USER_NOT_FOUND");

    // 3. Compare Password (Wait for it)
    const isMatch = await bcrypt.compare(password, user.hash);
    if (!isMatch) throw new Error("INVALID_PASSWORD");

    return { status: "Logged in", user: user.name };
    
  } catch (err) {
    // This catches ANY error from the steps above
    console.error("Auth Panic:", err.message);
    throw err; // Re-propagate the error
  }
}
```

### ============================================================
2. Trap
Sloppy (Slow):
```js
const user = await fetchUser(); // Takes 1s
const posts = await fetchPosts(); // Takes 1s
// TOTAL: 2 seconds (Blocking the logic)
```
Pro (Fast):
```js
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
// TOTAL: 1 second (Parallel execution)
```

