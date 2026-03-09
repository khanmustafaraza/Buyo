const express = require("express");
const multer = require("multer");
const product = require("../controllers/product-controller");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();
router.post("/create-product", upload.single("photo"), product.createProduct);
router.get("/get-all-product", product.getAllProducts);
router.get("/get-product/:id", product.getProduct);

module.exports = router;
