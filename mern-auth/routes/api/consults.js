const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Doctor = require("../../models/Doctor");
// Load input validation
const validateConsultInput = require("../../models/validation/consults");
// Load User model
const Consult = require("../../models/Consult");

/// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/consult", (req, res) => {
    // Form validation
  const { errors, isValid } = validateConsultInput(req.body);
    userid = req.body.userID
    if (!isValid) {
      return res.status(400).json(errors);
    }
      User.findById(userid, function(err, result){
        if (err){
          return res.status(404).json({userid: "User id not found"})
        }
        else{
          const newConsult = new Consult({
            userID: userid,
            hospital: req.body.hospital,
            doctor: req.body.doctor,
            patient: req.body.patient,
            description: req.body.description,
            recipes: req.body.recipes  
          });
          newConsult
            .save()
            .then(newConsult => res.json(newConsult));

        }
      })        
  });

module.exports = router;