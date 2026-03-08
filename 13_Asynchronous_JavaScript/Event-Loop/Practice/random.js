"use strict";
const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => console.log("TIMERS PHASE"), 0);
  setImmediate(() => console.log("CHECK PHASE"));

  process.nextTick(() => console.log("MICROTASK: nextTick"));
  Promise.resolve().then(() => console.log("MICROTASK: Promise"));
});
