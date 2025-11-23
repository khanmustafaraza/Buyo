// const multer = require("multer");

// // use memory storage (store file in RAM, not on disk)
// const storage = multer.memoryStorage();

// const upload = multer({ storage });

// module.exports = upload;
const Product = require("../models/product-model");

const createProduct = async (req, res, next) => {
  try {
    const {
      catname,

      name,
      brandname,
      mrp,
      discount,
      sp,
      unit,
      packageType,

      manufacturingDate,
      expiryDate,
      vegornon,
      remark,
      description,
      rating,
    } = req.body;
    console.log(packageType, unit);

    // create product object
    const productData = {
      catname,

      name,
      brandname,
      mrp,
      discount,
      sp,
      unit,
      packageType,

      manufacturingDate,
      expiryDate,
      vegornon,
      remark,
      description,
      rating,
    };

    // handle photo if uploaded
    if (req.file) {
      productData.photo = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const product = new Product(productData);
    const savedProduct = await product.save();

    res.status(201).json({
      success: true,
      msg: "Product created successfully",
      data: savedProduct,
    });
  } catch (error) {
    console.log(error);
    next({ message: "Error creating product", statusCode: 500 });
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    // console.log("first");
    const getProducts = await Product.find({}, { photo: 0 });
    // console.log(getProducts);
    res.status(200).json({
      success: true,
      msg: "Products Fetched Successfully",
      data: getProducts,
    });
  } catch (error) {
    console.log(error.msg);
    next({ message: "Error While Fectching product", statusCode: 500 });
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ _id: id }, { photo: 0 });
  if (product) {
    return res.status(200).json({
      success: true,
      msg: "Product Feached Successfully",
      data: product,
    });
  }
};

module.exports = { createProduct, getAllProducts, getProduct };
