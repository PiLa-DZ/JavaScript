require("fs").readFile(__filename, () => {
  console.log("ReadFile 1");
});

process.nextTick(() => console.log("Tick 1"));
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 1"), 1);

// You can run this loop to slow the call stack
// for (let i = 0; i < 1000000; i++) {}

// Tick 1
// Promise 1
// Timeout 1
// ReadFile 1

// ------------------------------------------------------------
// This time because the event loop is busy
// with nextTick and Promise it will take maybe 2ms
// so when it's move to (Timers Phase) it will see setTimeout there
