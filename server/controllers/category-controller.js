const Category = require("../models/category-model");

// Create a new category
const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const existsCat = await Category.findOne({
      name: name,
    });
    if (existsCat) {
      return res.status(404).json({
        success: false,
        msg: "Category Already Exist",
      });
    }

    // ✨ This is the uploaded file as buffer
    const buffer = req.file?.buffer;

    // Convert buffer → base64 string
    const photoStr = buffer?.toString("base64");

    // Save to MongoDB
    const category = new Category({
      name,
      photo: photoStr,
    });

    const saved = await category.save();
    res.status(201).json({ success: true, msg: "Category Added Succesffuly" });
  } catch (error) {
    next({ message: "Error creating category", statusCode: 500 });
  }
};

// Get all categories
const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    if (res.success)
      return res.success(categories, "Categories fetched successfully");
    res.status(200).json({
      success: true,
      msg: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    next({ message: "Error fetching categories", statusCode: 500 });
  }
};

// Update a category
const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, subName } = req.body;
    if (!id)
      return next({ message: "Category ID is required", statusCode: 400 });

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, subName },
      { new: true } // return the updated document
    );

    if (!updatedCategory)
      return next({ message: "Category not found", statusCode: 404 });

    // if (res.success) return res.success(updatedCategory, "Category updated successfully");
    res.status(200).json({
      success: true,
      msg: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    next({ message: "Error updating category", statusCode: 500 });
  }
};

// Delete a category
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id)
      return next({ message: "Category ID is required", statusCode: 400 });

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory)
      return next({ message: "Category not found", statusCode: 404 });

    if (res.success) return res.success(null, "Category deleted successfully");
    res
      .status(200)
      .json({ success: true, msg: "Category deleted successfully" });
  } catch (error) {
    next({ message: "Error deleting category", statusCode: 500 });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
