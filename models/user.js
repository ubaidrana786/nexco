const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const userScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    role:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    branchId:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
        
    },

  });

userScheme.methods.generateAuthToken = async function () {
    const token = jwt.sign(
      { _id: this._id, email: this.email, role: this.role },
      "jwtPrivateKey"
    );
    return token;
  };
  
  const User = mongoose.model('user', userScheme);
  module.exports = User;