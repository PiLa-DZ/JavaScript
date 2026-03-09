const fetchData = () =>
  new Promise((res) => setTimeout(() => res("Database Results"), 1000));
const timeout = (ms) =>
  new Promise((_, rej) =>
    setTimeout(() => rej(new Error("ETIMEDOUT: Server too slow")), ms),
  );

console.log("LOG: Fetching with 2-second limit...");

Promise.race([
  fetchData(), // Takes 5 seconds
  timeout(2000), // Takes 2 seconds
])
  .then((data) => {
    console.log("SUCCESS:", data);
  })
  .catch((err) => {
    // If the timer finishes first, this triggers!
    console.error("FAILURE:", err.message);
  });

// Output1:
// LOG: Fetching with 2-second limit...
// SUCCESS: Database Results

// Output1:
// LOG: Fetching with 2-second limit...
// FAILURE: ETIMEDOUT: Server too slow

// ============================================================
// SYSTEMS LOGIC: PROMISE.RACE (LATENCY SENSITIVE)
// ============================================================
// 1. INPUT: Takes an iterable of Promises.
// 2. OUTPUT: Resolves or Rejects as soon as ONE promise in
//    the iterable settles.
// 3. USE CASE: Implementing timeouts, finding the fastest
//    I/O response, or "abort" patterns.
// 4. ARCH TIP: Remember that the 'losers' still consume
//    memory/resources until they finish. V8 does not
//    SIGKILL the losing promises automatically.
// ============================================================
