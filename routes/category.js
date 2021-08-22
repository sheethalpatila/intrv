const express = require ("express");
const router = express.Router();


const {getCategory ,getAllCategory, getCategoryById ,createCategory,updateCategory, removeCategory} = require ("../controllers/category");



router.param("categoryId", getCategoryById);



router.get("/category/:categoryId" , getCategory);

router.get("/categories", getAllCategory);

router.post("/category" , createCategory);


router.put("/category/:categoryId" , updateCategory);

router.delete("/category/:categoryId" , removeCategory);

module.exports = router;