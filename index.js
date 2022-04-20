// first of all we are import express from express for creating backend server.
const dotenv = require('dotenv')
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const studentRouter = require("./routes/student");
const branchRouter = require("./routes/branches");
const cors = require('cors');
const path = require('path');



dotenv.config({path:"./config.env"})

const DB = process.env.DATABASE;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(DB)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use(cors('*'))
app.use("/api/auth", authRouter);
app.use("/api/students", studentRouter);
app.use("/api/branch", branchRouter);

// app.use('/', (req,res)=>{
// res.send("Hello World");

// })

// if(process.env.NODE_ENV == "production"){
//   if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
//     });
//    }
// }

// i am using port no : 3001;
app.listen(PORT, () => console.log(`Successfully ${PORT}`));

//  we are use this function to return a json

// if i want return a json from my get request

// creating a get request

// app.get("/register", (req, res) => {
//   userModel
//     .find()
//     .then((response) => {
//       res.send(response);
//     })
//     .catch((err) =>
//       res.send({ error: true, message: err.message }).status(500)
//     );
// });



// get student data form database only logged In .....
// app.get("/studentdata", auth, async (req, res) => {
//   const fetchdata =  await studentModel .find({userId:req.user._id})
//     res.send(fetchdata);
// });

// model for student
