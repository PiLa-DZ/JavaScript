// ============================================================
// *** File System Simulation ***
const fs = (fileName) => {
  let ConfigFile = '{"userId": 1, "name": "Joel"}';
  return new Promise((res, rej) => {
    if (fileName === "ConfigFile")
      setTimeout(() => {
        res(ConfigFile);
      }, 2000);
    else rej();
  })
    .then((v) => v)
    .catch(() => {
      throw new Error("File not found");
    });
};
// ============================================================
// *** Database Simulation ***
const db = (userId) => {
  let Table = {
    userId: 1,
    name: "Joel",
    hash: 123,
  };
  return new Promise((res, rej) => {
    if (userId === Table.userId)
      setTimeout(() => {
        res(Table);
      }, 2000);
    else rej(null);
  })
    .then((v) => v)
    .catch((e) => e);
};

// ============================================================
// bcrypt Simulation
const bcrypt = (password, hash) => {
  return new Promise((res, rej) => {
    if (password === hash)
      setTimeout(() => {
        res(true);
      }, 2000);
    else rej(false);
  })
    .then((v) => v)
    .catch((e) => e);
};

let fun = async (usersId, password) => {
  try {
    console.log("1. Read Config (Wait for it)");
    const configRaw = await fs("ConfigFile");
    const config = JSON.parse(configRaw);

    console.log("2. Fetch User (Wait for it)");
    const user = await db(config.userId);
    if (!user) throw new Error("Error: USER_NOT_FOUND");

    console.log("3. Compare Password (Wait for it)");
    const isMatch = await bcrypt(password, user.hash);
    if (!isMatch) throw new Error("INVALID_PASSWORD");

    return { status: "Logged in", user: user.name };
  } catch (err) {
    console.error("Auth Panic:", err.message);
    // throw err; // Re-propagate the error
  }
};
console.log(await fun("", 123));

// ============================================================
// This code from AI
async function loginUser(userId, password) {
  try {
    // 1. Read Config (Wait for it)
    const configRaw = await fs.readFile("config.json", "utf8");
    const config = JSON.parse(configRaw);

    // 2. Fetch User (Wait for it)
    const user = await db.query("SELECT * FROM users WHERE id = ?", [
      config.userId,
    ]);
    if (!user) throw new Error("USER_NOT_FOUND");

    // 3. Compare Password (Wait for it)
    const isMatch = await bcrypt.compare(password, user.hash);
    if (!isMatch) throw new Error("INVALID_PASSWORD");

    return { status: "Logged in", user: user.name };
  } catch (err) {
    // This catches ANY error from the steps above
    console.error("Auth Panic:", err.message);
    throw err; // Re-propagate the error
  }
}
