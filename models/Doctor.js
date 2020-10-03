const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  workingHospital: {
    type: String,
    required: true,
  },

  id_User: {
    type: String,
    required: true,
  },

  speciality: {
    type: String,
    required: false,
  },
});
module.exports = Doctor = mongoose.model("doctors", DoctorSchema);
