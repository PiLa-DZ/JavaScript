const sendEmail = (id) => {
  return id === 2
    ? Promise.reject(new Error("Invalid Address"))
    : Promise.resolve(`Sent to User ${id}`);
};

console.log("LOG: Starting Batch Send...");

Promise.allSettled([sendEmail(1), sendEmail(2), sendEmail(3)]).then(
  (results) => {
    // results is ALWAYS an array, and this .then() ALWAYS runs
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Task ${index + 1}: SUCCESS -> ${result.value}`);
      } else {
        console.error(`Task ${index + 1}: FAILED -> ${result.reason.message}`);
      }
    });
  },
);
// Output:
// LOG: Starting Batch Send...
// Task 1: SUCCESS -> Sent to User 1
// Task 2: FAILED -> Invalid Address
// Task 3: SUCCESS -> Sent to User 3

// ============================================================
// 2. The Internal "Result Object"
// V8 doesn't just return the data.
// It wraps every result in a specific object structure
// so you can programmatically filter them.

// For Success: { status: "fulfilled", value: <data> }

// For Failure: { status: "rejected", reason: <error_object> }

// ============================================================
// SYSTEMS LOGIC: PROMISE.ALLSETTLED (RESILIENCE)
// ============================================================
// 1. NON-BLOCKING: It never "fails fast." It waits for
//    the internal [[PromiseState]] of every item to
//    become either 'fulfilled' or 'rejected'.
// 2. DATA STRUCTURE: Returns an array of objects containing
//    status/value or status/reason.
// 3. NO .CATCH NEEDED: Since it always resolves, you
//    handle "errors" by filtering the results array
//    in your .then() block.
// 4. ARCH TIP: Use this for cleanup scripts or bulk
//    updates where you need to log failures without
//    stopping the entire process.
// ============================================================
