```js
// ============================================================
// JS ARCHITECTURE: THIS IN EVENT HANDLERS
// ============================================================
// 1. STANDARD BEHAVIOR: Event handlers hijack 'this' and
//    point it to the TARGET that fired the event.
// 2. NODE.JS: Inside an EventEmitter listener, 'this' refers
//    to the Emitter instance.
// 3. THE TRAP: Passing class methods as listeners causes
//    'this' to lose the class instance (Context Loss).
// 4. SOLUTION A: Use .bind(this) to lock the instance.
// 5. SOLUTION B: Use an Arrow Function wrapper (Lexical).
// 6. LOGIC: Treat event listeners as "external calls" that
//    don't respect your local object scope.
// ============================================================
```

### ============================================================
1. The Hijacking (Standard Function)

When you use a regular function as an event listener, 
the engine automatically binds this to the element 
or object that triggered the event.

```js
// Example: Frontend DOM
const btn = document.querySelector('#compile-btn');

btn.addEventListener('click', function() {
    // 'this' is hijacked by the browser to be the button itself
    console.log(this.id); // Output: "compile-btn"
});
```

### ============================================================
2. The Node.js Context (EventEmitter)

In Node.js, 
the EventEmitter class follows a similar rule. 
Inside the callback, 
this is set to the instance of the EventEmitter.

```js
"use strict";
const EventEmitter = require('events');
const sysMonitor = new EventEmitter();

sysMonitor.on('alert', function() {
    // 'this' refers to sysMonitor
    console.log("Alert received from emitter!");
    console.log(this === sysMonitor); // true
});

sysMonitor.emit('alert');
```

### ============================================================
3. The "Method" Disaster

The biggest trap for a backend developer 
is trying to use a class method as an event handler. 

Because the event emitter hijacks this, 
your method loses access to its own class properties.

```js
class Database {
    constructor() {
        this.connectionString = "postgresql://localhost:5432";
    }

    handleConnect() {
        // ❌ ERROR: 'this' is now the Emitter, not the Database!
        console.log(`Connecting to ${this.connectionString}`); 
    }
}

const db = new Database();
const emitter = new EventEmitter();

// This will fail because 'this' inside handleConnect changes
emitter.on('connect', db.handleConnect); 
emitter.emit('connect');
```

### ============================================================
4. The Fix: .bind() or Arrows

To keep your "senior peer" standards, you must preserve the context.

The .bind() way: emitter.on('connect', db.handleConnect.bind(db));
The Arrow way:   emitter.on('connect', () => db.handleConnect());
