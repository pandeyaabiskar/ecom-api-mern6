const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category"
  },
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const ProductModel = mongoose.model("Product", productSchema);
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = ProductModel;
