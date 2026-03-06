```js
// ============================================================
// JS EXPLICIT BINDING: .bind()
// ============================================================
// 1. DEFINITION: Creates a NEW function that, when called,
//    has its 'this' keyword set to the provided value.
// 2. EXECUTION: Deferred (Lazy). It does NOT run immediately.
// 3. PERMANENCE: Once bound, the context cannot be changed
//    by .call() or .apply() later. (Hard Binding).
// 4. ARGUMENTS: Can pre-fill arguments (Partial Application).
//    Syntax: func.bind(thisContext, arg1, arg2)
// 5. USE CASE:
//    - Preserving context in Asynchronous callbacks.
//    - Creating specialized utility functions from generic ones.
// ============================================================
```

### ============================================================
1. The Mechanic: Deferred Execution
The signature looks like .call(), but the behavior is "Lazy."
```js
"use strict";

const db = {
    service: "PostgreSQL",
    connect: function() {
        console.log(`[DB] Connecting to ${this.service}...`);
    }
};

// If we pass db.connect to a callback, we lose 'this'.
// So we "lock" it in advance:
const connectionTrigger = db.connect.bind(db);

// Later, perhaps in a different module or after a timer:
connectionTrigger(); // Output: [DB] Connecting to PostgreSQL...
```

### ============================================================
2. Partial Application (Currying Lite)
.bind() has a secret superpower: 
    it can also "pre-set" arguments. 
    This is a common pattern in Functional Programming.
```js
function logger(level, message) {
    console.log(`[${level}] ${this.node}: ${message}`);
}

const archNode = { node: "alpha-server" };

// We bind 'this' AND the first argument 'level'
const logError = logger.bind(archNode, "ERROR");
const logInfo = logger.bind(archNode, "INFO");

logError("Kernel Panic!"); // Output: [ERROR] alpha-server: Kernel Panic!
logInfo("System Update.");  // Output: [INFO] alpha-server: System Update.
```

### ============================================================
3. The Node.js "Callback" Trap
In Node.js, 
when you pass a method as a callback 
(e.g., to setTimeout or an Event Emitter), 
the engine calls that function without the object context. 
.bind() is the fix.
```js
const server = {
    uptime: 100,
    check() { console.log(this.uptime); }
};

// ❌ Error/Undefined: 'this' becomes global/undefined inside setTimeout
setTimeout(server.check, 1000); 

// ✅ Success: 'this' is locked to 'server'
setTimeout(server.check.bind(server), 1000);
```

### ============================================================
4. V8 Performance Note

Every time you call .bind(), 
V8 allocates a new function object on the Heap.

The Senior Peer Advice: 
    Don't call .bind() inside a high-frequency loop 
    (like processing 10,000 DB rows). 
    Bind it once at the top level 
    or in a class constructor to save CPU cycles and memory.

