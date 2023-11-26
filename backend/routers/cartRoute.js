const express = require("express");
const router = express.Router();
const {getUsersCartItems, addProductToCart, deleteCartItems} = require("../controllers/cartController.js");
const verifyToken = require("../middleware/auth.js");

router.post("/cart/add", verifyToken, addProductToCart);
router.get("/cart", verifyToken, getUsersCartItems);
router.delete("/cart/:id", verifyToken, deleteCartItems);

module.exports = router;