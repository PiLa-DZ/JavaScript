### ============================================================
1. The "Eternal List" (Accidental Globals)

If you keep pushing data into a global array 
and never clear it, 
that array will grow until 
the OS kills your process (OOM - Out of Memory).

```js
// This lives in the Global Scope (Root)
const memoryEater = [];

function downloadUpdate() {
  // We simulate a 1MB "blob" of data
  const heavyData = new Array(1_000_000).fill("📦");

  // WRONG: Pushing it to a global array that never gets cleared
  memoryEater.push(heavyData);
  console.log(`Units in RAM: ${memoryEater.length}`);
  if (memoryEater.length >= 100) memoryEater = [];
}

// If this runs in a loop or on a timer, you're toast.
setInterval(downloadUpdate, 100);
```

Why it leaks: 
    Because memoryEater is global, 
    it is always reachable from the root. 
    The GC can never "Release" the items inside it.

### ============================================================
2. The "Ghost" Event Listener

This is the most common leak in frontend development. 
You delete an element from the UI, 
but the "listener" (the logic) stays behind in memory.

```js
function setupButton() {
  const massiveData = new Array(10_000_000).fill("💾");

  const btn = document.getElementById('update-btn');
  
  btn.addEventListener('click', () => {
    // This closure "captures" massiveData
    console.log("Updating...", massiveData.length);
  });
}

// Later, you remove the button from the HTML:
// document.getElementById('update-btn').remove();

// THE LEAK: Even though the button is gone from the screen, 
// the listener is still in RAM because you didn't call removeEventListener.
```

### ============================================================
3. The "Uncleared Interval"

Timers are dangerous because they keep references 
alive until they are explicitly stopped.

```js
function startProcess() {
  const product = { name: "iPhone 15", data: new Array(1000000) };

  setInterval(() => {
    // As long as this interval runs, 'product' cannot be garbage collected
    console.log(`Watching: ${product.name}`);
  }, 1000);
}

startProcess();
// Even if you finish your logic, that interval runs FOREVER in the background.
```

### ============================================================
How to Fix It (The "Arch" Cleanup)

- Set to null: 
    When done with a global, do memoryEater = null.

- Clear Timers: 
    Always use clearInterval(myTimer).

- Remove Listeners: 
    Use btn.removeEventListener(...) 
    before removing the element.
