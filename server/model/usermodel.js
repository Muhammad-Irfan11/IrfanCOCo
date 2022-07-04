const mongoose = require("mongoose");

var schemaUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
  usertype: {
    type: String,
    required: true,
  },
});

const UserDB = mongoose.model("User", schemaUser);
module.exports = UserDB;
