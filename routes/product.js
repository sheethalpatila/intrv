const express = require("express");
const router = express.Router();


const {getProduct , getProductById , createProduct, updateProduct,removeProduct, getAllProducts ,getProductsByCategory} = require ("../controllers/product")

const {getCategoryById} = require("../controllers/category");

router.param("productId" , getProductById);

router.param("categoryId", getCategoryById);

router.get("/product/:productId" , getProduct);
router.get("/products" , getAllProducts)

router.get("/product-by-category/:categoryId" , getProductsByCategory)

router.post("/product" , createProduct);

router.put("/product/:productId" , updateProduct);

router.delete("/product/:productId" , removeProduct);


module.exports = router;