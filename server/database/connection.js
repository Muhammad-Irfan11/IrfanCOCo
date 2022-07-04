const mongoose = require("mongoose");

const connectDB = async () => {
  // mongodb connection string
  const con = mongoose
    .connect("mongodb://localhost:27017/cocoabakery", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to MongoDB...`))
    .catch((err) => console.log(err.message));
};

module.exports = connectDB;
