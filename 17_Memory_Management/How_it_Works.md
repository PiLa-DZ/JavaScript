Summary

Stack: 
    --> Fast, small, for primitives and addresses.

Heap: 
    --> Flexible, large, for objects.

Garbage Collection: 
    --> Deletes unreachable objects.

Golden Rule: 
    --> To free memory, 
        set your variables to null 
        or let them go out of scope 
        so the janitor can find them.

### ============================================================
1. The Two Memory Zones: Stack vs. Heap

JavaScript stores data in two distinct "physical" ways.

### --------------------------------------------------------
The Stack: 
    The "Fast & Organized" Drawer
    The Stack is for small, fixed-size data. 
    It works like a literal stack of books (Last-In, First-Out).

    What's stored here: 
        Primitive values (numbers, booleans, strings) 
        and references (pointers) to objects.

    Management: 
        Automatic. 
        When a function finishes, 
        its "frame" is popped off the stack 
        and the memory is reclaimed instantly.

### --------------------------------------------------------
The Heap: 
    The "Large & Flexible" Warehouse
    The Heap is for large, unpredictable data.

    What's stored here: 
        Objects, Arrays, and Functions 
        (anything that can grow in size).

    Management: 
        Managed by the Garbage Collector.

### ============================================================
2. The Reference Logic

This is the most common source of confusion.

When you create an object, the Object Data goes into the Heap.

The Variable you use to access it stays on the Stack, 
holding the "Address" of that heap data.

```js
let phone = { model: "iPhone 15" }; 
// Stack: phone -> Address #001
// Heap: #001 -> { model: "iPhone 15" }
```

### ============================================================
3. Garbage Collection (The "Janitor")

JavaScript uses an algorithm called "Mark-and-Sweep."

    Mark: 
        The janitor starts at the "Root" (the global object). 
        It follows every reference (variable) 
        to see what objects are currently "reachable."

    Sweep: 
        Any object in the Heap that is not reachable 
        (nothing is pointing to it) 
        is considered "garbage" 
        and is deleted to free up RAM.

### ============================================================
4. Memory Leaks: The "Zombie" Data

A memory leak happens 
when you forget to "let go" of an object. 
Even if you don't need it anymore, 
if a variable is still pointing to it, 
the Garbage Collector won't touch it.

Common Culprits:

    Global Variables: 
        Variables attached to window or global never get collected.

    Forgotten Event Listeners: 
        If you delete a button from the UI 
        but don't remove the .addEventListener, 
        the listener stays in memory.

    Closures: 
        Keeping a reference to a massive object 
        inside a function that never finishes.
