// EXPRESS SETUP
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

// ROUTES
// console.log(process.env.PORT);
const PORT = process.env.PORT || 8080;

// DATA
const listItems = [
  "Hit the gym",
  "Pay bills",
  "Meet George",
  "Buy eggs",
  "Read a book",
  "Organize office",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  res.setHeader("Access-Control-Allow-Origin", origin);
});
// GET /todos
app.get("/todos", (req, res) => {
  res.json(listItems);
});

// POST /todos
app.post("/todos", (req, res) => {
  // get data from req
  console.log(req.body);
  const { listItem } = req.body;
  listItems.push(listItem);
  res.json(listItems);
});

// DELETE /todos
// POST /todos
app.delete("/todos", (req, res) => {
  // get data from req
  console.log(req.body);
  const { idx } = req.body;
  listItems.splice(idx, 1);
  res.json(listItems);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
