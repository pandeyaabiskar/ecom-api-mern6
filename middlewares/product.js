// const productData = require("../data/products.json");
const ProductModel = require("../models/product");

const filterProducts = async (req, res, next) => {
  const { category, minprice } = req.query;

  if (minprice) {
    req.query.price = { $gte: minprice }
    delete req.query.minprice
  }
  console.log(req.query)

  //Replacing json file data with database call
  const newProductData = await ProductModel.find(
    req.query,
    { title: 1, price: 1, category: 1, image: 1 }
  );

  req.productData = newProductData;
  next();

  // let filteredProducts = [];
  // //First check category filter
  // if (category) {
  //   filteredProducts = await ProductModel.find({ category: category });
  // }
  // //Second check min price filter
  // if (minprice) {
  //   //Checking if any previous filter has already run
  //   if (filteredProducts.length !== 0) {
  //     filteredProducts = await ProductModel.find({
  //       category: category,
  //       price: { $gte: minprice },
  //     });
  //   } else {
  //     filteredProducts = await ProductModel.find({price: {$gte: minprice}})
  //   }
  // }
  // if (category || minprice) {
  //   res.json(filteredProducts);
  // } else {
  //   req.productData = newProductData;
  //   next();
  // }
};

module.exports = { filterProducts };
