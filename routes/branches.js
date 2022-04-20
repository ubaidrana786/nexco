const express = require("express");
const router = express.Router();
const branchModel = require("../models/branch");

router.post("/", async (req, res) => {
  try {
    const branchExist = await branchModel.findOne({ branch: req.body.branch });

    if (branchExist) {
      res.status(422).json({ error: "branch already exist " });
    }

    const branchCollection = new branchModel({
      branch: req.body.branch,
      city: req.body.city,
    });

    const branchRegister = await branchCollection.save();

    if (branchRegister) {
      res.status(201).json({ message: "branch registered successfully  " });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
