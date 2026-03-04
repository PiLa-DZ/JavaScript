```js
// ============================================================
// Conditional Operators
// ============================================================
// 1. Ternary (? :): Perfect for quick variable assignments.
// 2. Optional Chaining (?.): Prevents "Cannot read property of undefined" errors.
// 3. Nullish Coalescing (??): Best for default values when 0 or "" are valid data.
// ============================================================
```
```js
// 1. The Ternary Operator (? :)
const port = 8080;
const status = (port === 8080) ? "Default Port" : "Custom Port";

console.log(status); // "Default Port"

// ============================================================
// 2. Optional Chaining Operator (?.)
const user = {
  profile: {
    // name is missing here
  }
};

// Instead of: if(user && user.profile && user.profile.name)
console.log(user.profile?.name); // undefined (doesn't crash!)

// ============================================================
// 3. Nullish Coalescing Operator (??)
const userCount = 0;

const result1 = userCount || 10; // 10 (because 0 is falsy)
const result2 = userCount ?? 10; // 0  (because 0 is NOT null or undefined)
```
