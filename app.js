const express = require("express");
const productRouter = require("./routes/productRoutes")
const homeRouter = require("./routes/homeRoutes")
const cors = require('cors')
const morgan = require('morgan')
const connectDatabase = require('./database/connection')
//Configure dotenv
require('dotenv').config();

const app = express();

connectDatabase()

app.use(cors())
app.use(morgan('tiny'))

//Apply to specific routes
// app.use('/api/products', cors())

//Routes
app.use(homeRouter)
//Product Routes
app.use("/api/products", productRouter);
//Handle all other routes
app.all("*", (req, res) => {
    res.status(404).send("<h1 style='color: red'>Page not found</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
