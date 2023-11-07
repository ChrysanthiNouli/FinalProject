const express = require("express");
const router = express.Router();
const {
    readProducts,
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productControllers");

router.get("/products", readProducts);
router.post("/products/create", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router();
