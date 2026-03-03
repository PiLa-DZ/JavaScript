### 1. What is a Set?
A Set is a built-in object that stores values of any type. 
The "magic" of a Set is that each value can occur only once. 
If you try to add the same value twice, 
the Set will simply ignore the second attempt.

1. Order: It maintains the insertion order (just like Map).
2. Uniqueness: It uses "Same-value-zero" equality (similar to ===) to keep items unique.

### 2. Basic Syntax
```js
// 1. Create a Set
const myTools = new Set();

// 2. Add values
myTools.add("neovim");
myTools.add("tmux");
myTools.add("arch");
myTools.add("neovim"); // Duplicate! This will be ignored.

// 3. Check for existence (Very fast!)
console.log(myTools.has("tmux")); // true

// 4. Check size
console.log(myTools.size); // 3 (not 4, because neovim was a duplicate)

// 5. Delete a value
myTools.delete("arch");
```

### 3. The "Killer" Use Case: Removing Duplicates
The most common way developers use a Set is to quickly clean up an array that has duplicate items.
```js
const numbers = [1, 2, 2, 3, 4, 4, 5];

// Convert Array to Set (duplicates are gone)
const uniqueSet = new Set(numbers);

// Convert back to Array using the Spread operator (...)
const uniqueArray = [...uniqueSet];

console.log(uniqueArray); // [1, 2, 3, 4, 5]
```

### 4. Iterating over a Set
Since Sets are iterable, you can loop through them just like you do with Maps or Arrays.
```js
const tags = new Set(["javascript", "linux", "coding"]);

for (let value of tags) {
  console.log("Tag:", value);
}

// Or using forEach
tags.forEach((value) => {
  console.log("Processing:", value);
});
```

### 5. New Features (ES2024 / 2026 Update)
By now, modern JavaScript engines (including the Node v25 you're using) have added powerful Set Composition methods. You no longer have to write complex loops to compare two sets:
1. setA.union(setB): Returns a set with all elements from both.
2. setA.intersection(setB): Returns only elements present in both.
3. setA.difference(setB): Returns elements in A that are NOT in B.


