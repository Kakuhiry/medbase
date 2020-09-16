//Changes for new branch
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
    doctorid = req.body.doctorID
    if (!isValid) {
      return res.status(400).json(errors);
    }
      Doctor.findById(doctorid, function(err, resultD){
        if (err){
          return res.status(404).json({doctorid: "Doctor id not found"})
        }
        else{
          User.findById(userid, function(err, result){
            if(err){
              return res.status(404).json({userid: "User id not found"})
            } else{
              const newConsult = new Consult({
                userID: userid,
                doctorID: doctorid,
                hospital: req.body.hospital,
                doctor: resultD.name,
                patient: result.name,
                description: req.body.description,
                recipes: req.body.recipes  
              });
              newConsult
                .save()
                .then(newConsult => res.json(newConsult));
            }
          })
        }
      })        
  });

module.exports = router;

