const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth.js");
const {
    readProducts,
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productControllers");

router.get("/products", readProducts);
router.post("/products/create", verifyToken, addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
