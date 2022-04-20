const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { string } = require("joi");

const studentScheme = new mongoose.Schema({
  fname: String,
  dob: String,
  status: String,
  city: String,
  gender: String,
  date: String,
  email:String ,
  number: String,
  branch: String,
  officer: String,
  type: String,
  buy: String,
  addmission: String,
  gte: String,
  sop: String,
  visafilling: String,
  visalodgment: String,
  index:Number,
  password:String,
});


module.exports = mongoose.model("students", studentScheme);
