const express = require("express");
const router = express.Router();
const studentModel = require("../models/students");
const auth = require("../authMiddleware");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

router.post("/", auth, async (req, res) => {
  // const { fname, mname, lname, city, gender, date, email, number, officer, branch } = req.body;

  // if (!fname || !mname || !lname || !city || !gender || !date || !email || !number || !officer || !branch) {
  //   res.status(422).json({ message: "please fill correct data " })
  // }

  try {
    const userExist = await studentModel.findOne({ email: req.body.email });

    if (userExist) {
      res.status(422).json({ error: "email already exist" });
    }

    // const studentCollection = new studentModel({fname, mname,lname,city,gender, date,email,number,officer,branch,
    //   // userId: req.user._id,
    // });
    const totalResult = await studentModel.countDocuments({});
    const randompassword = Math.random().toString(36).slice(-8);

    const studentCollection = new studentModel({
      fname: req.body.fname,
      dob: req.body.dob,
      city: req.body.city,
      gender: req.body.gender,
      date: req.body.date,
      email: req.body.email,
      number: req.body.number,
      officer: req.body.officer,
      branch: req.body.branch,
      status: req.body.status,
      type: req.body.type,
      buy: req.body.buy,
      addmission: req.body.addmission,
      gte: req.body.gte,
      sop: req.body.sop,
      visafilling: req.body.visafilling,
      visalodgment: req.body.visalodgment,
      index: totalResult + 1,
      password: randompassword,
    });

    const salt = await bcrypt.genSaltSync(10);
    studentCollection.password = bcrypt.hashSync(
      studentCollection.password,
      salt
    );

    const userRegister = await studentCollection.save();

    if (userRegister) {
      let transporter = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "ubaid@nectarsol.com", // generated ethereal user
          pass: "ubaidsarwar786", // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "ubaid@nectarsol.com", // sender address
        to: `${req.body.email}`, // list of receivers
        subject: "NEXCO - Education & Immigration Consultants", // Subject line
        html: `Hi! ${req.body.fname}. Your password is <b>${randompassword}</b>`, // html body
      });

      if (info.messageId) {
        res.status(201).json({ message: "user registered successfully  " });
      } else {
        res.send("email not send");
      }
    }
  } catch (error) {
    res.status(422).json({ error: "error" });
  }
});

router.get("/page", async (req, res) => {
  const PAGE_SIZE = 0;
  const page = parseInt(req.query.page || "0");
  const total = await studentModel.countDocuments({});
  const totalResult = await studentModel
    .find({})
    .sort({ date: -1 })
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
  res.json({
    totalPages: Math.ceil(total / PAGE_SIZE),
    totalResult,
  });
});

router.get("/", auth, (req, res) => {
  studentModel
    .find()
    .sort({ date: -1 })
    .then((response) => {
      res.send(response);
    })
    .catch((err) =>
      res.send({ error: true, message: err.message }).status(500)
    );
});

// get a data according to filter

// router.get("/filter", auth, async (req, res) => {
//   const PAGE_SIZE = 10;
//   const page = parseInt(req.query.page || "0");
//   const total = await studentModel.countDocuments({});
//   const totalResult = await studentModel
//     .find(req.query ? { branch: req.query.branch } : {})
//     .limit(PAGE_SIZE)
//     .skip(PAGE_SIZE * page);
//   res.json({
//     totalPages: Math.ceil(total / PAGE_SIZE),
//     totalResult,
//   });
// });

router.get("/filter", auth, async (req, res) => {
  studentModel
    .find(req.query ? { branch: req.query.branch } : {})
    .then((response) => {
      res.send(response);
    })
    .catch((err) =>
      res.send({ error: true, message: err.message }).status(500)
    );
});

router.get("/officerfilter", auth, function (req, res) {
  studentModel
    .find(req.query ? { officer: req.query.officer } : {})
    .then((response) => {
      res.send(response);
    })
    .catch((err) =>
      res.send({ error: true, message: err.message }).status(500)
    );
});

// Update Student
router.route("/:id").put((req, res) => {
  studentModel
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          status: req.body.status,
          addmission: req.body.addmission,
          gte: req.body.gte,
          sop: req.body.sop,
          visafilling: req.body.visafilling,
          visalodgment: req.body.visalodgment,
        },
      }
    )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.post("/login", async (req, res) => {
  const student = await studentModel.findOne({ email: req.body.email });

  if (!student) {
    res.send({ message: "Invalid Email Or Password", error: true }).status(422);
    return;
  }

  const compare = await bcrypt.compare(req.body.password, student.password);

  if (compare) {
    res.send(student).status(201);
  } else {
    res.send({ message: "Invalid Email Or Password", error: true }).status(422);
  }
});

module.exports = router;
