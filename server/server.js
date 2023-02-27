const express = require("express");
const notes = require("./constants/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.get("/api", (req, res) => {
  console.log(`Hello from ${req.url}`);
});
app.get("/api/notes", (req, res) => {
  console.log(`Hello from ${req.url}`);
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  console.log(`Hello from ${req.url}`);
  const note = notes.find((elem) => elem._id === req.params.id);
  res.json(note);
});

const PORT = process.env.PORT || 3000; 
app.listen("3000",() => {
  console.log("Server listening !");
});
