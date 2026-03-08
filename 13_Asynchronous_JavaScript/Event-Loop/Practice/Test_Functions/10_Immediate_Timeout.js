setTimeout(() => console.log("Timeout 1"), 0);
setImmediate(() => console.log("Immediate 1"));

// for (i = 0; i < 10000000; i++) {}

// ------------------------------------------------------------
// If you run the for loop the output will be like this:
//
// Timeout 1
// Immediate 1

// ------------------------------------------------------------
// If you not run the for loop the output will be like this:
//
// Timeout 1
// Immediate 1
