

const express = require("express");
const productController = require("../modules/product/controllers/product.controller")  

const router = express.Router();

router.get("/products/base",productController.getProductPage);
router.post("/products/add",productController.addProduct);

router.get("/products/update_page/:id",productController.getProductUpdate_page);
router.post("/products/update/:id",productController.updateProduct);

router.get("/products/delete/:id",productController.deleteProduct);



module.exports = router