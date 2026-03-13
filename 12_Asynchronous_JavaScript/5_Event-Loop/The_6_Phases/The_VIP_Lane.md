1. The "VIP" Lane (Microtasks)

Whenever the engine finishes the callbacks in a specific phase (like Timers), it must clear the Microtask queue before it is allowed to move to the next phase (like I/O).

Priority 1: process.nextTick() (The "Emergency" queue).

Priority 2: Promises (.then, await).
