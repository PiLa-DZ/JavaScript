setImmediate(() => console.log("Immediate 1"));
setImmediate(() => {
  console.log("Immediate 2");
  process.nextTick(() => console.log("Immediate 2 --> Tick"));
  Promise.resolve().then(() => console.log("Immediate 2 --> Promise"));
});
setImmediate(() => console.log("Immediate 3"));
// Immediate 1
// Immediate 2
// Immediate 2 --> Tick
// Immediate 2 --> Promise
// Immediate 3
