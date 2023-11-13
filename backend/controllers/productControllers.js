const Product = require("../models/productModel");

const readProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).send(allProducts);
    } catch (err) {
        res.status(500).send({msg: "Internal server error"});
    }
};

const addProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const createdProduct = await Product.create(newProduct);
        res.status(200).send(createdProduct);
    } catch (err) {
        res.status(500).send({msg: "Internal server error."});
    }
};

const updateProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const id = req.params.id;
        await Product.updateOne({_id: id}, newProduct);
        res.status(200).send({msg: "Product updated."});
    } catch (err) {
        res.status(500).send({msg: "Internal server error."});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.deleteOne({_id: id});
        res.status(200).send({msg: "Product deleted."});
    } catch (err) {
        res.status(500).send({msg: "Internal server error"});
    }
};

module.exports = {readProducts, addProduct, updateProduct, deleteProduct};