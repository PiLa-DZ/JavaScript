// 1. The "Disk" (In-memory storage)
const DATA_STORE = {
  users: [
    { id: 1, username: "jol_dev", hash: "secret123", role: "admin" },
    { id: 2, username: "linux_fan", hash: "arch4life", role: "user" },
  ],
  posts: [{ id: 101, userId: 1, content: "Hello from my simulation!" }],
};

// 2. The Logic (The "Driver")
const db = {
  // Simulate: SELECT * FROM table WHERE key = value
  findOne: (table, key, value) => {
    return new Promise((resolve, reject) => {
      console.log(`[DB_LOG] Querying ${table} for ${key}=${value}...`);

      // Simulate 500ms network latency
      setTimeout(() => {
        const result = DATA_STORE[table]?.find((item) => item[key] === value);

        if (result) {
          resolve(result);
        } else {
          // Standard DB behavior: If query runs but finds nothing,
          //                       it's NOT a system error.
          // It returns null/undefined.
          resolve(null);
        }
      }, 500);
    });
  },

  // Simulate a Connection Failure
  ping: () => {
    return new Promise((resolve, reject) => {
      const isOnline = Math.random() > 0.1; // 10% chance of failure
      if (isOnline) resolve("PONG");
      else reject(new Error("ECONNREFUSED: Database offline"));
    });
  },
};

module.exports = db;
