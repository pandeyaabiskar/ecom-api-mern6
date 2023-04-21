const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
