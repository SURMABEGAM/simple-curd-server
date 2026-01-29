const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("SIMPLE CRUD SERVER IS RUNNING!");
});

// fake users data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

// GET users
app.get("/user", (req, res) => {
  res.send(users);
});

// POST user
app.post("/user", (req, res) => {
  const newUser = req.body;
  console.log("POST API called:", newUser);

  newUser.id = users.length + 1;
  users.push(newUser);

  res.send({
    message: "User added successfully",
    user: newUser,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

