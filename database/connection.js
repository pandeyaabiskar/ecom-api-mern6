const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log("Database connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDatabase;
