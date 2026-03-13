require("fs").readFile(__filename, () => {
  console.log("ReadFile 1");
});

process.nextTick(() => console.log("Tick 1"));
Promise.resolve().then(() => console.log("Promise 1"));
// Tick 1
// Promise 1
// ReadFile 1
