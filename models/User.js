const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  bloodType: {
    type: String,
    required: false
  },

  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  direction1: {
    type: String,
    required: true,
  },

  direction2: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false
  }
});
module.exports = User = mongoose.model("users", UserSchema);
