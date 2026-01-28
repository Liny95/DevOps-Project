const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = []; // temporary storage

// Home API
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Get users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add user
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: "User added successfully" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
