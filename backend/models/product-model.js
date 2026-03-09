const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    catname: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
    brandname: {
      type: String,
      trim: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    sp: {
      type: Number,
      required: true, // selling price
    },
    unit: {
      type: String,
      required: true,
    },
    packageType: {
      type: String, // weight or volume (e.g., 500g, 1L)
    },
    manufacturingDate: {
      type: Date,
    },
    expiryDate: {
      type: Date,
    },
    vegornon: {
      type: String,
      enum: ["veg", "non-veg"],
    },
    remark: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    photo: {
      data: Buffer, // binary image data
      contentType: String, // image/jpeg, image/png etc.
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
