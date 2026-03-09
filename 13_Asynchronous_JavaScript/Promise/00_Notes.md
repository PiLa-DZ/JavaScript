Asynchronous-operation-callback-based
Asynchronous-operation-promise-based

Promise.then() / .catch() / .finally(): These are the native JS way to say "Do this later, but ASAP."
await:                                  This is just a pause button for a Promise.
process.nextTick():                     (This is a Node.js specific global, not pure JS, but it works the same way—it's a "Priority 0" queue).


[[PromiseState]]
[[PromiseResult]]
[[PromiseFulfillReactions]]
[[PromiseRejectReactions]]
[[PromiseIsHandled]]
