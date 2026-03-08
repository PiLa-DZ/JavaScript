process.nextTick(() => console.log("Tick 1"));
process.nextTick(() => console.log("Tick 2"));
process.nextTick(() => {
  console.log("Tick 3");
  process.nextTick(() => {
    console.log("Tick 3 --> Tick");
  });
});

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));
Promise.resolve().then(() => {
  console.log("Promise 3");
  process.nextTick(() => console.log("Promise 3 --> Tick"));
});
Promise.resolve().then(() => console.log("Promise 4"));
// Tick 1
// Tick 2
// Tick 3
// Tick 3 --> Tick
// Promise 1
// Promise 2
// Promise 3
// Promise 4
// Promise 3 --> Tick
