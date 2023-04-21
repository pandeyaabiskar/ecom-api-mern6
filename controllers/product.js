const productData = require("../data/products.json");
const ProductModel = require('../models/product');

const getAllProducts = (req, res) => {
  res.json(req.productData);
};

const getSingleProduct = async (req, res) => {
  const { productID } = req.params;
  const productData = await ProductModel.findById(productID)
  res.json(productData)
};

const createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body)
    //or
    // const product = new ProductModel(req.body);
    // await product.save();
    res.json({
      message: "Data saved successfully",
      data: product
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err
    });
  }
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
