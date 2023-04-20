const productData = require("../data/products.json");
const ProductModel = require('../models/product');

const getAllProducts = (req, res) => {
  res.json(req.productData);
};

const getSingleProduct = (req, res) => {
  const { productID } = req.params;
  //Typecasting to number as params is string by default
  if (Number(productID) >= 1 && Number(productID) <= productData.length) {
    res.json(productData[productID - 1]);
  } else {
    res.send("Invalid URL");
  }
};

const createProduct = (req, res) => {
  res.send("Data saved sucessfully");
};
const updateProduct = (req, res) => {
  res.send("Data updated sucessfully");
};
const replaceProduct = (req, res) => {
  res.send("Data replaced sucessfully");
};
const deleteProduct = (req, res) => {
  res.send("Data deleted sucessfully");
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
};
