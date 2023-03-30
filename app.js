const express = require("express");
const PORT = 4000;
const productRouter = require("./routes/productRoutes")
const homeRouter = require("./routes/homeRoutes")
const cors = require('cors')

const app = express();

app.use(cors())

//Routes
app.use(homeRouter)
//Product Routes
app.use("/api/products", productRouter);
//Handle all other routes
app.all("*", (req, res) => {
    res.status(404).send("<h1 style='color: red'>Page not found</h1>")
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
