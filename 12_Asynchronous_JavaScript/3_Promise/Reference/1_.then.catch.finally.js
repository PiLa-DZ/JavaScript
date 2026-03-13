const getCamera = () => {
  return Math.random() > 0.5
    ? Promise.resolve("Camera Feed Active")
    : Promise.reject(new Error("Permission Denied"));
};

console.log("LOG: Showing 'Loading' Spinner...");

getCamera()
  .then((stream) => {
    // RUNS ONLY ON SUCCESS
    console.log("SUCCESS:", stream);
  })
  .catch((err) => {
    // RUNS ONLY ON FAILURE
    console.error("FAILURE:", err.message);
  })
  .finally(() => {
    // RUNS ALWAYS
    // Perfect for: Closing DB connections, hiding UI spinners, deleting temp files
    console.log("CLEANUP: Hiding 'Loading' Spinner...");
  });

// Output1:
// LOG: Showing 'Loading' Spinner...
// SUCCESS: Camera Feed Active
// CLEANUP: Hiding 'Loading' Spinner...

// Output2:
// LOG: Showing 'Loading' Spinner...
// FAILURE: Permission Denied
// CLEANUP: Hiding 'Loading' Spinner...

// ============================================================
// JS ARCHITECTURE: THE TRINITY (THEN/CATCH/FINALLY)
// ============================================================
// 1. .THEN(): The primary success path. Handles data.
// 2. .CATCH(): The error trap. Handles rejections/throws.
// 3. .FINALLY(): The observer. Does not receive data/errors.
//    Used strictly for side-effects (cleanup/UI resets).
// 4. FLOW: .finally() executes once the promise is
//    "Settled" (either fulfilled or rejected).
// ============================================================
