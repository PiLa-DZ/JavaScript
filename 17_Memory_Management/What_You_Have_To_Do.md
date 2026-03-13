```js
/*
==============================================================================
  Backend Task     | The Risk         | "The ""Clean"" Solution"
  =================|==================|=====================================
  Caching          | Heap Overflow    | Use Redis or LRU Cache.
  -----------------+------------------+-------------------------------------
  File I/O         | Allocation Spike | Use Streams.
  -----------------+------------------+-------------------------------------
  Request Handling | Closure Leaks    | Define functions outside handlers.
  -----------------+------------------+-------------------------------------
  Logging          | Buffer Bloat     | Use a stream-based logger like Pino.
==============================================================================
*/
```

### ============================================================
1. Guard the "Old Generation" (Stop Global Accumulation)
In a backend environment, your process stays alive for weeks.

The Trap: 
    Objects pushed into a global array or a cache that never expires.

The Action: 
    Never use a plain object or array as a permanent cache. 
    Use a Limited Cache (like lru-cache) 
    or an external store like Redis. 
    Redis lives outside your JS memory, 
    so it can't crash your Node process.

### ============================================================
2. Close the "Gates" (Clear Timers and Listeners)
Node.js is built on EventEmitter and Streams.

The Trap: 
    Attaching a listener to a long-lived object 
    (like the server or a database connection) 
    inside a request handler.

The Action: 
    If you add a listener inside a function, 
    make sure you use .once() 
    or explicitly call .removeListener().

### ============================================================
3. Stream, Don't Buffer (Memory Lifecycle Management)
This is the most "Backend" tip of all.

The Trap: 
    Reading a 2GB log file or video into memory using fs.readFile. 
    This forces the Allocation phase to grab massive chunks 
    of RAM all at once.

The Action: 
    Use Streams (fs.createReadStream). 
    Streams process data in small "chunks" (usually 64KB). 
    The memory lifecycle for each chunk is tiny: 
        it’s allocated, 
        used, 
        and released almost immediately, keeping your RAM usage flat.

### ============================================================
4. Beware of "Heavy" Closures in Middleware
Middleware in frameworks like Express runs on every single request.

The Trap: 
    Creating functions inside your request handlers that "trap" large objects.

The Action: 
    Keep your logic modular. 
    Define heavy processing functions outside the request handler 
    so they don't create a new closure 
    for every single user hitting your site.

### ============================================================
5. Monitor with "htop" equivalent tools
You need to know when the Garbage Collector is struggling.

The Action: 
    Use the built-in process.memoryUsage() 
    to log your heapUsed and rss (Resident Set Size).
```js
console.log(process.memoryUsage());
/* Output looks like:
{
  rss: '120MB',      <- Total memory for the process
  heapTotal: '80MB', <- Memory reserved for objects
  heapUsed: '45MB'   <- Memory actually holding data
}
*/
```

