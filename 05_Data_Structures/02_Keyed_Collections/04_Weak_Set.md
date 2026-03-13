### 1. What is a WeakSet?
A WeakSet is a collection of objects, 
and only objects. 
The "Weak" part means that it holds 
a weak reference to the objects inside it.

1. Objects only: 
    You cannot add strings, numbers, or booleans.
2. No strong link: 
    If an object in a WeakSet has no other references pointing to it, 
    the JavaScript engine will delete it from memory, 
    and it will disappear from the WeakSet automatically.
3. Not iterable: 
    You cannot loop through it or ask for its size.

### 2. Basic Syntax (JavaScript)
```js
// 1. Create a WeakSet
const activeSessions = new WeakSet();

// 2. Objects to track
let session1 = { id: 'tmux-1' };
let session2 = { id: 'tmux-2' };

// 3. Adding objects
activeSessions.add(session1);
activeSessions.add(session2);

// 4. Checking existence
console.log(activeSessions.has(session1)); // true

// 5. The "Weak" behavior
session1 = null; 
// Now, the object originally stored in session1 is eligible for Garbage Collection.
// It will be removed from the WeakSet automatically behind the scenes.
```
