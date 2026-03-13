import express from "express";

const app = express();
app.use(express.json()); // Essential: This allows Express to read JSON in the request body

// 0. THE RAM DATABASE
// Every time you save this file and the server restarts, this resets!
let users = [
  { id: 1, name: "Joel", role: "Admin" },
  { id: 2, name: "Arch_User", role: "Dev" },
];

app.get("/", (req, res) => {
  res.json({ message: "Welcome to home" });
});

// 1. READ (GET) - Get one users
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.filter((u) => u.id === parseInt(id));
  res.json(user);
});

// 2. READ (GET) - Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// 3. CREATE (POST) - Add a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role || "User",
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 4. UPDATE (PUT) - Edit a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === parseInt(id));

  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).send("User not found");
  }
});

// 5. DELETE (DELETE) - Remove a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id !== parseInt(id));
  res.send(`User ${id} deleted.`);
});

app.listen(3000, () =>
  console.log("Server A (RAM DB) running on http://localhost:3000"),
);
