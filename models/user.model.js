const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  phone: String,
  gender: String,
  dateOfBirth: String
}));