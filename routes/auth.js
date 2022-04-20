const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const auth = require("../authMiddleware");

const { body, validationResult } = require("express-validator");

// creating a post request for nexco staf
router.post(
  "/register",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let User = await UserModel.findOne({ email: req.body.email });
      if (User) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        branch: req.body.branch,
        date: req.body.date,
        image:req.body.image
      });

      const salt = await bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(user.password, salt);

      user
        .save()
        .then((response) => {
          console.log(response);
          res.send(response);
        })
        .catch((err) =>
          res.send({ error: true, message: err.message }).status(400)
        );
    } catch (error) {
      res.send({ error: true, message: err.message }).status(400)
    }

  }
);

// creating a POST request for login nexco staff
router.post("/login", async  (req, res)=> {
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    res.send({ message: "Invalid Email Or Password", error: true }).status(422);
    return;
  }
  const compare = await bcrypt.compare(req.body.password, user.password);
  if (compare) {
    const token = await user.generateAuthToken();
    console.log(token)
    res.send({ user: user, token: token }).status(201);
  } else {
    res.send({ message: "Invalid Email or password", error: true }).status(422);
  }

  
});

router.get("/users", auth, (req, res) => {
  UserModel
    .find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) =>
      res.send({ error: true, message: err.message }).status(500)
    );
});

module.exports = router;
