// Using express for the backend
const express = require("express");
// connects the mongodb database with the code bewlo mongoose.connect
const mongoose = require("mongoose");
// This is the route for the product endpoints
const productRoute = require("./Routes/product.route.js")
// This is where all the data is located of the Product
const Product = require("./models/productModel.js");

require("dotenv").config();


// Middleware
const app = express();
// This is what will help read the data from the req.body
app.use(express.json());
// This is to be able to add portmans through forms
app.use(express.urlencoded({ extended: false }));
//This varibale holds port that the local server will display data
const PORT = 3000;

// This connects the product.route document to the product route prefix
app.use("/api/products", productRoute);

// This will help connect the data
mongoose.connect(
  
   process.env.MONGO_URI
  )
  .then(() => {
    console.log("Connected to Server");
    app.listen(PORT, () => {
      console.log(`Server listening to port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed to Server");
  });
