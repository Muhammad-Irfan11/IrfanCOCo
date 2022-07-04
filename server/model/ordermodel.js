const mongoose = require("mongoose");

var schemaOrder = new mongoose.Schema({
  customerEmail: String,
  cakes: String,
});

const OrderDB = mongoose.model("Order", schemaOrder);
module.exports = OrderDB;
