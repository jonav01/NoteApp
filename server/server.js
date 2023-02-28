const express = require("express");
const notes = require("./constants/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdB = require("./config/db");
const userRoutes = require("./routes/userRouter");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

connectdB();

app.get("/api", (req, res) => {
  console.log(`Hello from ${req.url}`);
});

app.get("/api/notes", (req, res) => {
  console.log(`Hello from ${req.url}`);
  res.json(notes);
});

const PORT = process.env.PORT || 3000;
app.listen(8080, () => {
  console.log("Server listening !");
});
