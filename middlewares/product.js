const productData = require("../data/products.json");

const filterProducts = (req, res, next) => {
    const { category, minprice } = req.query;

    const newProductData = [];
    productData.map((product) => {
      const { id, title, price, category, image } = product;
      newProductData.push({ id, title, price, category, image });
    });
  
    let filteredProducts = [];
    //First check category filter
    if (category) {
      filteredProducts = newProductData.filter(
        (product) => product.category === category
      );
    }
    //Second check min price filter
    if (minprice) {
      //Checking if any previous filter has already run
      if (filteredProducts.length !== 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= minprice
        );
      } else {
        filteredProducts = newProductData.filter(
          (product) => product.price >= minprice
        );
      }
    }
    if (category || minprice) {
      res.json(filteredProducts);
    } else {
      req.productData = newProductData;
      next();
    }
};

module.exports = { filterProducts };
