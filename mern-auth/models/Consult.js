const mongoose = require("mongoose");
const Patient = require("./User");
const User = require("./User");
const Schema = mongoose.Schema;
               ObjectID = Schema.ObjectId;
// Create Schema
const ConsultSchema = new Schema({
  userID:{
    type: String,
    required: true
  },
  doctorID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  hospital: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  patient:{
    type: String, //Could later be converted to ObjectID
    required: true
  },
  description: {
    type: String,
    required: true
  },
  recipes: {
    type: String,
    required: false
  }
});
module.exports = Consult = mongoose.model("consults", ConsultSchema);
