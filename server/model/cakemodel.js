const mongoose = require("mongoose");

var schemaCake = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: Number,

  description: String,
});

const CakeDB = mongoose.model("Cake", schemaCake);
module.exports = CakeDB;
