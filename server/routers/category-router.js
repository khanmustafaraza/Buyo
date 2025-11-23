const express = require("express");
const category = require("../controllers/category-controller");

const router = express.Router();

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
router.post(
  "/create-category",
  upload.single("photo"),
  category.createCategory
);
router.get("/get-all-category", category.getAllCategories);
router.put("/update-category/:id", category.updateCategory);
router.delete("/delete-category/:id", category.deleteCategory);

module.exports = router;
