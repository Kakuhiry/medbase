const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../models/validation/register");
const validateLoginInput = require("../../models/validation/login");
const validateRegisterDoctorInput = require("../../models/validation/registerDoctor");
// Load User model
const User = require("../../models/User");
const Doctor = require("../../models/Doctor");

/// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
        phoneNumber: req.body.phoneNumber,
        birthday: req.body.birthday,
        direction1: req.body.direction1,
        country: req.body.country,
        hospital: req.body.hospital,
        role: req.body.role,
        bloodType: req.body.bloodType
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//Register user

router.post("/register/doctor", (req, res) => {
  // Form validation
  const { errorsD, isValidD } = validateRegisterDoctorInput(req.body);
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors), res.status(400).json(errorsD);
  }
  if (!isValidD) {
    return res.status(400).json(errorsD);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        socialHC: req.body.socialHC,
        bloodType: req.body.bloodType,
        password: req.body.password,
        password2: req.body.password2,
        phoneNumber: req.body.phoneNumber,
        birthday: req.body.birthday,
        direction1: req.body.direction1,
        country: req.body.country,
        role: req.body.role
      });

      const newDoctor = new Doctor({
        name: newUser.name,
        workingHospital: req.body.workingHospital,
        id_User: newUser._id,
        speciality: req.body.speciality,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          try {
            newDoctor
              .save()
              .then((newDoctor) => res.json(newDoctor))
              .catch((err) => console.log(err));
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          } catch {
            console.log("Unexpected error");
          }
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if suser exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          role: user.role,
          workingHospital: user.workingHospital
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              user_ID: user.id,
              user_Name: user.name
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
