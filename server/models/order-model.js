const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Register",
      required: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: Number, // snapshot price during order
      },
    ],

    finalAmount: {
      type: Number,
      required: true,
    },

    address: {
      fullName: String,
      mobile: String,
      email: String,
      houseNo: String,
      street: String,
      city: String,
      state: String,
      pincode: String,
    },

    paymentInfo: {
      orderId: { type: String, default: "" }, // Razorpay order id
      paymentId: { type: String, default: "" },
      signature: { type: String, default: "" },
    },

    status: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "Cancelled"],
      default: "Pending",
    },

    payMentMethod: {
      type: String,
      enum: ["cash on delivery", "online payment"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
