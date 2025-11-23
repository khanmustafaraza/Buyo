const Product = require("../models/product-model");

const getProductPhoto = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);

    if (!id || id === "undefined") {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid product ID" });
    }

    const productPhoto = await Product.findById(id).select("photo");
    if (!productPhoto || !productPhoto.photo) {
      return res.status(404).send("Photo not found");
    }

    res.set("Content-Type", productPhoto.photo.contentType);
    res.send(productPhoto.photo.data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getProductPhoto };
