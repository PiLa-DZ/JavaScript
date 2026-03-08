require("fs").readFile(__filename, () => {
  console.log("ReadFile 1");
});

process.nextTick(() => console.log("Tick 1"));
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 1"), 1);

setImmediate(() => console.log("Immediate 1"));
for (let i = 0; i < 1000000000; i++) {}
// Tick 1
// Promise 1
// Timeout 1
// Immediate 1
// ReadFile 1

// ???????????????????????????????????????????
// ------------------------------------------------------------
// But Why Immediate before ReadFile ?????????
// ------------------------------------------------------------
// In (Poll Phase)
// the Event Loop sometimes needs a second "Tick"
// to move that completed I/O
// from the internal Libuv "completed" list
// into the active JavaScript Poll Queue
// ------------------------------------------------------------
// the I/O callback is still technically
// waiting to be "bridged" from C++ (Libuv) to JavaScript.
