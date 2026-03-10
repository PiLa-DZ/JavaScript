setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);
setTimeout(() => {
  console.log("Timeout 3");
  setTimeout(() => console.log("Timeout 3 --> Timeout"), 0);
  process.nextTick(() => console.log("Timeout 3 --> Tick"));
}, 0);
setTimeout(() => console.log("Timeout 4"), 0);
// Timeout 1
// Timeout 2
// Timeout 3
// Timeout 3 --> Tick
// Timeout 4
// Timeout 3 --> Timeout
