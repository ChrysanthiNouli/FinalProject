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
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;