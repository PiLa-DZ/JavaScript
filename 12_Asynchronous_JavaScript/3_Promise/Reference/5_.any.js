const queryNodeA = () => Promise.reject(new Error("Node A: Down"));
const queryNodeB = () =>
  new Promise((res) => setTimeout(() => res("Data from Node B"), 2000));
const queryNodeC = () => Promise.resolve("Data from Node C");

console.log("LOG: Searching for the first available node...");

Promise.any([queryNodeA(), queryNodeB(), queryNodeC()])
  .then((data) => {
    // This fires as soon as the FIRST success happens (Node C)
    console.log("SUCCESS:", data);
  })
  .catch((err) => {
    // This ONLY fires if Node A, B, AND C all reject
    console.error("FAILURE: All nodes are down.");
    console.log(err.errors); // AggregateError containing all 3 errors
  });

// Output:
// LOG: Searching for the first available node...
// SUCCESS: Data from Node C

// ============================================================
// 2. The "AggregateError" (The Systems Detail)
// When Promise.any() fails, it doesn't just give you one error. It gives you a special object called an AggregateError.

// It’s a single Error object that contains an internal array called .errors.

// This array holds the specific Error objects from every failed promise in your list.

// This is perfect for your Neovim logs because you can see exactly why every attempt failed.

// ============================================================
// SYSTEMS LOGIC: PROMISE.ANY (FIRST SUCCESS)
// ============================================================
// 1. GOAL: Resolves as soon as any promise in the
//    iterable fulfills.
// 2. RESILIENCE: Ignores rejections unless EVERY promise
//    in the array fails.
// 3. AGGREGATE ERROR: If all fail, it throws a special
//    AggregateError containing all rejection reasons.
// 4. ARCH TIP: Use this for high-availability systems
//    where you have redundant mirrors or backup services.
// ============================================================
