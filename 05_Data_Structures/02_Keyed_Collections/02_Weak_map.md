### 1. What is a WeakMap?
A WeakMap is a collection of key/value pairs, 
but with two major restrictions compared to a regular Map:

1. Keys MUST be Objects: 
    You cannot use strings, numbers, or symbols as keys.
2. The "Weak" Reference: 
    If there are no other references to an object used as a key, 
    that object can be garbage collected 
    (removed from memory), 
    even if it's still inside the WeakMap.

### 2. Basic Syntax
```js
let user = { name: "Nabil" };

const metadata = new WeakMap();

// Setting a value
metadata.set(user, "Premium Account");

console.log(metadata.get(user)); // "Premium Account"

// Now, if we destroy the reference to the user object...
user = null; 

// The entry in 'metadata' will be automatically removed 
// from memory shortly after!
```
