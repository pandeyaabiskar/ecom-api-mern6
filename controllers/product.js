const productData = require("../data/products.json");
const ProductModel = require("../models/product");

const getAllProducts = (req, res) => {
  res.json(req.productData);
};

const getSingleProduct = async (req, res) => {
  const { productID } = req.params;
  const productData = await ProductModel.findById(productID).populate(
    "category"
  );
  res.json(productData);
};

const createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    //or
    // const product = new ProductModel(req.body);
    // await product.save();
    res.json({
      message: "Data saved successfully",
      data: product,
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productID,
      req.body,
      { new: true }
    );
    res.json({
      message: "Data updated successfully",
      data: updatedProduct,
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const replacedProduct = await ProductModel.findOneAndReplace(
      { _id: productID },
      req.body,
      { new: true }
    );
    res.json({
      message: "Data replaced successfully",
      data: replacedProduct,
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const deletedProduct = await ProductModel.findByIdAndDelete(productID);
    res.json({
      message: "Data deleted successfully",
      data: deletedProduct,
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
};
