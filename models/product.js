const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [10, "Title should be at least 10 characters"],
    maxlength: [100, "Title cannot be greater than 100 characters"]
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be less than 0"]
  },
  category: {
    type: String,
    enum: ['jewelery', 'electronics', "men's clothing", "women's clothing"]
  },
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
