const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    status: {
        type: String,
    },
    category: {
        type: String,
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;