const Product = require("../models/productModel.js");

const getProducts = async (req, res) => {
    try {
        // Product.find({}) and the obj of all the product
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        // get the obj or the item by destructuring it with an obj = params
        const { id } = req.params;
        // prducts hold the obj that is being updated = await the Product.findbyId(param of the id obj, body data of the obj being updated)
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product){
            return res.status(404).json({ message: "Prdouct not found" });
        }

        const updateProduct = await  Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not Found'});
        }

        res.status(200).json({ message: "Product Deleted SUCCESSFULLY!" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
