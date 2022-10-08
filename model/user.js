const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true,
  }
},{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;
