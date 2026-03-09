const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = model("Category", categorySchema);

module.exports = Category;
