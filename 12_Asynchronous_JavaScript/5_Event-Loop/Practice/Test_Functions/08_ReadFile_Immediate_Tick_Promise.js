require("fs").readFile(__filename, () => {
  console.log("ReadFile 1");
  setImmediate(() => console.log("ReadFile 1 --> Immediate"));
  process.nextTick(() => console.log("ReadFile 1 --> Tick"));
  Promise.resolve().then(() => console.log("ReadFile 1 --> Promise"));
});

process.nextTick(() => console.log("Tick 1"));
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 1"), 1);

// Tick 1
// Promise 1
// Timeout 1
// ReadFile 1
// ReadFile 1 --> Tick
// ReadFile 1 --> Promise
// ReadFile 1 --> Immediate
