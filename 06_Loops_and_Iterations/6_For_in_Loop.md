```js
// ============================================================
// The 'for...in' Loop
// ============================================================
// Syntax: for (const key in object) { ... }
// 
// 1. Used for: Walking through keys of an Object.
// 2. Accessing Values: Use object[key].
// 3. ⚠️Danger: It includes inherited enumerable properties.
// 4. ⚠️Rule: Never use this for Arrays; use 'for...of' instead.
// ============================================================

for (const key in object) {
  // code to run for each property name
}

// ============================================================
const nvimConfig = {
  theme: "gruvbox",
  lineNumbers: true,
  syntax: "on"
};

for (const setting in nvimConfig) {
  console.log(`Setting: ${setting} is set to ${nvimConfig[setting]}`);
}
// Output:
// Setting: theme is set to gruvbox
// Setting: lineNumbers is set to true
// Setting: syntax is set to on

// ============================================================
// ⚠️ The "Don't Use for Arrays" Rule
// Technically, you can use for...in on an Array, but don't do it. 

// ⚠️1: It iterates over the indices as Strings ("0", "1"), not Numbers.

// ⚠️2: If someone added a custom property to the Array prototype, 
//         for...in will find it and break your logic.

// ⚠️3: It doesn't guarantee the order of iteration.

```
