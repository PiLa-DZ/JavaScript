### 1. What is a Map?
A Map is a collection of keyed data items, 
similar to an Object. However, 
it has several critical advantages that make it 
the preferred choice for modern TypeScript development.

1. Any Key Type: 
    Unlike Objects 
    (which only allow strings or symbols as keys), 
    a Map allows anything to be a key—
    including functions, objects, or even other Maps.
1. Order Preservation: 
    Maps remember the original insertion order of the keys.
1. Size Property: 
    You can get the size of a Map instantly with 
    .size (no more Object.keys(obj).length).

### 2. Basic Syntax

1. Creating a Map
You can create an empty map or initialize it with an array of arrays (key-value pairs).
```js
// Empty map
const myMap = new Map();

// Initialized map
const systemInfo = new Map([
  ["os", "Arch Linux"],
  ["shell", "zsh"],
  ["editor", "neovim"]
]);
```

2. Adding and Updating (set)
The .set(key, value) method adds a new entry. If the key already exists, it updates the value.
```js
myMap.set("user", "nabil");
myMap.set("status", "learning js");

// Chaining is also possible
myMap.set("isTerminal", true).set("theme", "dracula");
```

3. Reading and Checking (get, has)
Accessing values is done via methods rather than bracket notation.
```js
console.log(myMap.get("user")); // "nabil"
console.log(myMap.has("status")); // true
console.log(myMap.get("nonExistent")); // undefined
```

4. Size and Deleting (delete, clear)
Unlike Objects, you don't need to count keys manually.
```js
console.log(myMap.size); // 4

myMap.delete("theme"); // Removes one entry
myMap.clear(); // Removes EVERYTHING
```

5. Iterating
Maps are built to be looped through easily.
```js
const tools = new Map([
  ["multiplexer", "tmux"],
  ["editor", "nvim"]
]);

// Loop through entries [key, value]
for (const [key, value] of tools) {
  console.log(`${key}: ${value}`);
}

// Loop through keys only
for (const key of tools.keys()) {
  console.log(key);
}
```
