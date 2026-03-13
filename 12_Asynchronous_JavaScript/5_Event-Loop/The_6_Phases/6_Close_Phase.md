```js
// ============================================================
// JS ARCHITECTURE: CLOSE CALLBACKS (PHASE 6)
// ============================================================
// 1. PURPOSE: Final cleanup of resources (sockets, handles).
// 2. TRIGGER: Emitted when a handle is closed or destroyed.
// 3. EXIT CONDITION: If no active handles remain after this
//    phase, the Node.js process terminates.
// 4. CHRONOLOGY: The absolute last phase of a "Tick."
// 5. SYSTEMS ANALOGY: Like the 'umount' command after
//    finishing with a drive—it ensures everything is
//    safely detached before the system shuts down.
// ============================================================
```

### ============================================================
*** Close Callbacks Phase ***
### ============================================================
1. What runs here?

This phase executes callbacks associated with the closing of handles. 
A "handle" is just a fancy name for an open resource like 
a network socket, a file stream, or a database connection.

If a handle or socket is closed abruptly 
(e.g., socket.destroy()), 
the 'close' event will be emitted here.

### ============================================================
2. Code Example: Socket Cleanup

Here is how you would see this in action. 
We’ll create a server and a client, 
then destroy the connection to trigger the phase.

```js
const net = require('net');

// 1. Create a simple TCP server
const server = net.createServer((socket) => {
    console.log("[SERVER] Client connected.");
    
    // Triggering a close manually
    socket.destroy(); 
});

server.listen(8080, () => {
    const client = net.connect(8080);

    // This callback is executed in the CLOSE CALLBACKS PHASE
    client.on('close', () => {
        console.log("[EVENT LOOP] Phase 6: Close Callback Executed.");
        
        // After this, the process checks if it should exit
        server.close();
    });
});
```

### ============================================================
3. The "Process Exit" Logic

After this phase finishes, 
the Event Loop does a Reference Check:

---> Are there active handles? 
 |      (e.g., Is the server still listen()
 |      ing? Is there a setTimeout still running?)
 |
 |---> If Yes: It starts a brand new Tick at the Timers Phase.
 |
 |---> If No: It exits to your Zsh prompt.

Systems Tip: 
    This is why your script "hangs" sometimes
    you likely have an open handle (like a DB connection) 
    that hasn't reached the Close Callbacks Phase yet.

