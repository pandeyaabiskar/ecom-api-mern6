const productData = require("../data/products.json");
const express = require("express");
const { filterProducts } = require("../middlewares/product");

//Cannot access app in this file so we create a new router object to collect
//routes information
const router = express.Router();

//Returns all data
router.get("/", filterProducts, (req, res) => {
  res.json(req.productData);
});

//Return specific data
//:productID is called Route Parameter
router.get("/:productID", (req, res) => {
  const { productID } = req.params;
  //Typecasting to number as params is string by default
  if (Number(productID) >= 1 && Number(productID) <= productData.length) {
    res.json(productData[productID - 1]);
  } else {
    res.send("Invalid URL");
  }
});

router.post("/", (req, res) => {
  res.send("Data saved sucessfully");
});
router.put("/:productID", (req, res) => {
  res.send("Data updated sucessfully");
});
router.patch("/:productID", (req, res) => {
  res.send("Data updated sucessfully");
});
router.delete("/:productID", (req, res) => {
  res.send("Data deleted sucessfully");
});

module.exports = router;
