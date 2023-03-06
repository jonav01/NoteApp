const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdB = require("./config/db");
const userRoutes = require("./routes/userRouter");
const noteRoutes = require("./routes/noteRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(notFound)
app.use(errorHandler)
connectdB();



const PORT = process.env.PORT || 3000;
app.listen(8080, () => {
  console.log("Server listening !");
});
