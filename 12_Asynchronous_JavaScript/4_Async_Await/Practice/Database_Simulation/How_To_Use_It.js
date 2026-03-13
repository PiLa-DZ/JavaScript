import db from "./Database-Simulation.js";

// ============================================================
const getUserById = await db.findOne("users", "id", 1);
console.log(getUserById);
// ------------------------------------------------------------
// [DB_LOG] Querying users for id=1...
// { id: 1, username: 'jol_dev', hash: 'secret123', role: 'admin' }

// ============================================================
const getUserByName = await db.findOne("users", "username", "jol_dev");
console.log(getUserByName);
// ------------------------------------------------------------
// [DB_LOG] Querying users for username=jol_dev...
// { id: 1, username: 'jol_dev', hash: 'secret123', role: 'admin' }

// ============================================================
const getUserByHash = await db.findOne("users", "hash", "secret123");
console.log(getUserByHash);
// ------------------------------------------------------------
// [DB_LOG] Querying users for hash=secret123...
// { id: 1, username: 'jol_dev', hash: 'secret123', role: 'admin' }

// ============================================================
const getUserByRole = await db.findOne("users", "role", "admin");
console.log(getUserByRole);
// ------------------------------------------------------------
// [DB_LOG] Querying users for rule=admin...
// { id: 1, username: 'jol_dev', hash: 'secret123', role: 'admin' }

// ============================================================
// Check if DB is alive first
try {
  const isDbOnlyn = await db.ping();
  console.log(isDbOnlyn);
  // ------------------------------------------------------------
  // PONG
} catch (err) {
  console.error(err.message);
  // ------------------------------------------------------------
  // ECONNREFUSED: Database offline
}

// ============================================================
// Full Example
async function logIn(username, hash) {
  try {
    // Check if DB is alive first
    await db.ping();

    const user = await db.findOne("users", "username", username);
    if (!user) throw new Error("404: User not found in simulation");

    const isMatch = hash === user.hash;
    if (!isMatch) throw new Error("Wring username or hash");

    console.log("LOGIN SUCCESS:", user);
  } catch (err) {
    console.error("CRITICAL:", err.message);
  }
}

// ============================================================
logIn("jol_dev", "secret123");
// ------------------------------------------------------------
// [DB_LOG] Querying users for username=jol_dev...
// LOGIN SUCCESS: { id: 1, username: 'jol_dev', hash: 'secret123', role: 'admin' }

// ============================================================
logIn("jol_dev", "wrong hash");
// ------------------------------------------------------------
// // [DB_LOG] Querying users for username=jol_dev...
// CRITICAL: Wring username or hash
