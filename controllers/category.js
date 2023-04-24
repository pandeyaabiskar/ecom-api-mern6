const CategoryModel = require("../models/category");

const getAllCategory = async (req, res) => {
  try {
    const categoryData = await CategoryModel.find();
    res.json(categoryData);
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};
const getSingleCategory = async (req, res) => {
  try {
    const { categoryID } = req.params;
    const categoryData = await CategoryModel.findById(categoryID);
    res.json(categoryData);
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};
const createCategory = async (req, res) => {
  try {
    const category = await CategoryModel.create(req.body);
    res.json({
      message: "Data saved successfully",
      data: category,
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};
const updateCategory = async (req, res) => {
  try {
    const { categoryID } = req.params;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryID,
      req.body,
      { new: true }
    );
    res.json({
      message: "Data updated successfully",
      data: updatedCategory,
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { categoryID } = req.params;
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryID);
    res.json({
      message: "Data deleted successfully",
      data: deletedCategory,
    });
  } catch (err) {
    res.json({
      message: "Error occured",
      data: err,
    });
  }
};

module.exports = {
  getAllCategory,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
