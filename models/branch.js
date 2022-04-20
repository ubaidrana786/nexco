const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const branchScheme = new mongoose.Schema({
    branch: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    branchId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
      },

});

module.exports = mongoose.model("branch", branchScheme);
