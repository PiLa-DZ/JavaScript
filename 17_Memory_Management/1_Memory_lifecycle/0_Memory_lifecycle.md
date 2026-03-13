================================
*** Memory LifeCycle         ***
*** Allocate → Use → Release ***
================================

### ============================================================
1. Allocation (Reserve the RAM)
Stack Allocation: For fixed-size items (Num, Str, Bool).
Heap Allocation:  For dynamic-size items (Objects, Arrays).
```js
const version = 1.1;           // Allocated on the Stack
const config = { os: "Arch" }; // Allocated on the Heap
```

### ============================================================
2. Use (Read/Write)
```js
console.log(config.os); // Reading from memory
config.kernel = "LTS";  // Writing to memory
```

### ============================================================
3. Release (Free the RAM)

This is the most critical stage. 
In languages like C, you must manually run free(). 
In JavaScript, the Garbage Collector (GC) monitors this.

    A piece of memory is released 
    when the code determines it is no longer reachable.

### --------------------------------------------------------
The "Scope" Connection
Memory release is heavily tied to Function Scope.
```js
function installPackage() {
  const tmpData = { size: "500MB" }; // Allocated
  console.log("Installing...");      // Use
} 

installPackage();
// Once the function finishes, 'tmpData' goes out of scope.
// It is no longer reachable, so the GC "Releases" it.
```

### ============================================================
Why the Lifecycle Fails (Memory Leaks)

A memory leak occurs when the lifecycle gets stuck at stage 2 (Use) 
and never reaches stage 3 (Release). 

This usually happens because you accidentally kept a "Reference" alive.

    The Zombie Reference: 
        If you store a large object in a global array 
        and forget about it, 
        it stays "reachable" forever. 
        The GC assumes you still need it, 
        so it never releases the RAM.
