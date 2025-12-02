const express = require("express");
const categoryProduct = require("../controllers/category-product-controller");

const router = express.Router();

router.get("/get-all-category-product/:name", categoryProduct.getAllCategoryProduct);


module.exports = router;
