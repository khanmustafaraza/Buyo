const Category = require("../models/category-model");
const Product = require("../models/product-model");



// Get all categories based produc t
const getAllCategoryProduct = async (req, res, next) => {
  try {
    const name = req.params.name
    console.log(name)
    const categoryProduct = await Product.find({catname:name});
    
    res.status(200).json({
      success: true,
      msg: "Products fetched successfully",
      data: categoryProduct,
    });
  } catch (error) {
    next({ message: "Error fetching categories", statusCode: 500 });
  }
};





module.exports = {
  
  getAllCategoryProduct,
 
};
