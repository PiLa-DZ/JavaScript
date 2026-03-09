const fetchProfile = () => Promise.resolve({ name: "ArchUser" });
const fetchPosts = () => Promise.resolve(["Post 1", "Post 2"]);
const fetchSettings = () => Promise.resolve({ theme: "dark" });

console.log("LOG: Initiating Parallel Fetch...");

Promise.all([fetchProfile(), fetchPosts(), fetchSettings()])
  .then((results) => {
    // 'results' is an ARRAY matching the order of the input array
    const [profile, posts, settings] = results;

    console.log("SUCCESS: All data received.");
    console.log("User:", profile.name);
    console.log("Posts Count:", posts.length);
  })
  .catch((err) => {
    // THE "FAIL-FAST" RULE:
    // If even ONE promise rejects, the whole Promise.all rejects immediately!
    console.error("FAILURE: One of the tasks failed.", err.message);
  });
// Output:
// LOG: Initiating Parallel Fetch...
// SUCCESS: All data received.
// User: ArchUser
// Posts Count: 2

// ============================================================
// SYSTEMS LOGIC: PROMISE.ALL (PARALLELISM)
// ============================================================
// 1. INPUT: Takes an iterable (usually an Array) of Promises.
// 2. OUTPUT: A single Promise that resolves to an Array of
//    results in the EXACT SAME ORDER as the input.
// 3. FAIL-FAST: If any Promise rejects, the entire
//    Promise.all rejects immediately with that error.
// 4. ARCH TIP: Use this for independent I/O tasks to
//    drastically reduce total execution latency.
// ============================================================
