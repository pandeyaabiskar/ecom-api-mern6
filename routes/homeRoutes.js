const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ecommerce API");
});
  
module.exports = router;