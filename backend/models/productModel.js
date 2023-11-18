const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    // image: String,
    status: String,
    category: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // liked: Boolean,
    // cart: Boolean,
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;