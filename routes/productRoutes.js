const express = require("express");
const { filterProducts } = require("../middlewares/product");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
} = require("../controllers/product");

//Cannot access app in this file so we create a new router object to collect
//routes information
const router = express.Router();

//Returns all data
router.get("/", filterProducts, getAllProducts);
//Return specific data
//:productID is called Route Parameter
router.get("/:productID", getSingleProduct);
router.post("/", createProduct);
router.put("/:productID", replaceProduct);
router.patch("/:productID", updateProduct);
router.delete("/:productID", deleteProduct);

module.exports = router;
