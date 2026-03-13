```js
// ============================================================
// Logical Operators
// ============================================================
// 1. && (AND): Returns first Falsy or last Truthy. (Short-circuits)
// 2. || (OR):  Returns first Truthy or last Falsy. (Great for defaults)
// 3. !  (NOT): Flips the boolean value.
// 4. !! (Double NOT): Forces a value into a Boolean type.
// 5. ?? (Nullish): Like ||, but only for null/undefined (Safe for 0 or "").
// ============================================================
```

### ============================================================
1. Logical AND (&&)
The && operator returns true only if both operands are truthy.
```js
// Use Case: Only run a command if the user is an admin
const isAdmin = true;
const deleteFile = () => console.log("File deleted.");

isAdmin && deleteFile(); // "File deleted."
```

### ============================================================
2. Logical OR (||)
The || operator returns true if at least one operand is truthy.
```js
// Use Case: Setting a default port for your server
const customPort = null;
const port = customPort || 3000; 

console.log(port); // 3000
```

### ============================================================
3. Logical NOT (!)
The ! operator flips the boolean value. It always returns a primitive Boolean (true or false), regardless of the input type.

!true becomes false.
!"Arch" (truthy string) becomes false.
!!0 (falsy number) becomes false.

Pro-Tip: Using Double NOT (!!) is the fastest way to "cast" any value to its actual Boolean status.

### ============================================================
4. Nullish Coalescing (??)
The ?? operator only triggers for null or undefined.
```js
const timeout = 0;

const result1 = timeout || 30; // 30 (Oops!)
const result2 = timeout ?? 30; // 0  (Correct!)
```


