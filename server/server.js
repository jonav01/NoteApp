const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdB = require("./config/db");
const userRoutes = require("./routes/userRouter");
const noteRoutes = require("./routes/noteRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require('path')
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.get('/' , (req,res) => {
  res.status(200).send('App is running')
})
// --------------deployment-----------------
// __dirname=path.resolve()
// if(process.env.NODE_ENV === "production"){
// app.use(express.static(path.join(__dirname,'/client/dist')))

// app.get('*' , (req,res) => {
//   res.sendFile(path.resolve(__dirname , 'client' , 'dist' , 'index.html'))
// })
// }else{
//   app.get('/' , (req,res) => {
//   res.send("API is running..")
//   })
// }
// --------------deployment-----------------

app.use(notFound)
app.use(errorHandler)
connectdB();



const PORT = process.env.PORT || 3000;
app.listen(8080, () => {
  console.log("Server listening !");
});
