// *** Microtask Queue ***
Promise.resolve().then(() => console.log("Promise 1"));
// Promise 1
