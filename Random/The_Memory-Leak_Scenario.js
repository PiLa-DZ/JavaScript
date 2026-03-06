// ============================================================
/*
    The Backend Warning: Memory Leaks
        As a Node.js developer,
        this is the #1 way to accidentally crash your server.
        If you create thousands of closures that hold onto large objects
        (like database buffers or huge strings)
        and you never "let go" of those closures,
        your RAM usage will climb until the OS kills the process.
*/

let leakArray = [];

function createLeak() {
  let hugeData = new Array(1000000).fill("💾");

  // This closure prevents 'hugeData' from ever being deleted
  return function () {
    return hugeData[0];
  };
}

// If you keep pushing these into an array, the RAM never clears!
setInterval(() => {
  leakArray.push(createLeak());
}, 100);
// ============================================================

// ============================================================
/*
How to "Free" a Closure
    To let the Garbage Collector do its job, 
    you must break the reference. 
    If you set the variable that holds the closure to null, 
    the entire "chain" of references breaks, 
    and the GC can reclaim all that memory.
*/

let myClosure = createVault();
// ... use it ...
myClosure = null; // Now the closure AND the variables it captured are "unreachable."
// ============================================================
