let rand = () => Math.random() < 0.5;

new Promise((res, rej) => {
  // PHASE 1: System Level Failure
  if (rand()) res("OK: Connected to DB");
  else rej(new Error("ECONNREFUSED: Database is down"));
})
  .then((value) => {
    console.log(value);
    // PHASE 2: Logic Level Failure
    if (rand()) return "User: ArchUser01";

    // Using the "Soft Exit" with a proper Error object
    return Promise.reject(new Error("NOT_FOUND: User does not exist"));
  })
  .then((user) => {
    console.log("Success:", user);
  })
  .catch((err) => {
    // Now 'err' is ALWAYS an object with .message and .stack
    console.error("--- SYSTEM LOG ---");
    console.error("Message:", err.message);
    console.error("Stack Trace:", err.stack); // This shows the exact line in Neovim!
  });
