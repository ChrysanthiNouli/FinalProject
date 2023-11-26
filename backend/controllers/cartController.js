const mongoose = require("mongoose");
const User = require("../models/userModel.js");

const getUsersCartItems = async (req, res) => {
    try {
        let userId = req.user.id;
        //console.log(userId);
        const userCart = await User.findById(userId).populate("cart.product");
        res.send(userCart.cart);
    } catch (err) {
        console.log(err);
        res.status(500).send({msg:"Internal server error."});
    }
}

const  addProductToCart = async (req, res) => {
    try {
        let userId = req.user.id;
        let {productId} = req.body;
        //console.log(productId);
        const user = await User.findById(userId);
        console.log(user.cart);
        let existingProduct = user.cart.find((item) => 
             item.product._id.equals(productId))
            //console.log(item);
        console.log(existingProduct);
        if (!existingProduct) {
            user.cart.push({product:productId})
        } else {
            res.send({msg:"Item is already in the cart"});
        }
        await user.save();
        res.send({msg:"Product added successfully to the cart."});
    } catch (err) {
        console.log(err);
        res.status(500).send({msg:"Internal server error."});
    }
};

const deleteCartItems = async (req, res) => {
    try {
        const userId = req.user.id;
        const productIdToDelete = req.params.productId;
        const user = await User.findById(userId);
        user.cart = user.cart.filter((item) => !item.product._id.equals(productIdToDelete));
        await user.save();
        res.status(200).send({msg:"Product deleted from cart."});
    } catch (err) {
        console.log(err);
        res.status(500).send({msg:"Internal server error."});
    }
};

module.exports = { getUsersCartItems,  addProductToCart, deleteCartItems }