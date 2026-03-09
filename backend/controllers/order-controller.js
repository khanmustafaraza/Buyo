const Razorpay = require("razorpay");
const Order = require("../models/order-model");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { items, finalAmount, addressObj, payMentMethod } = req.body;
    const id = req.user._id;

    if (payMentMethod == "cash on deliver") {
      const newOrder = await Order.create({
        userId: id,
        items,
        address: addressObj,
        finalAmount,
        status: "Pending",
        payMentMethod: "cash on delivery",
      });
      console.log(newOrder);
      if (newOrder) {
        res.json({
          success: true,
          msg: "Order Created Successfully!",
        });
      }
    }
    const options = {
      amount: Math.round(finalAmount) * 100, // in paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      notes: { id },
    };

    const order = await razorpay.orders.create(options);

    // 2️⃣ Save order in MongoDB with status Pending
    const newOrder = await Order.create({
      userId: id,
      items,
      address: addressObj,
      finalAmount,
      status: "Pending",
      payMentMethod: "online payment",
    });
    if (newOrder) {
      res.json({
        success: true,
        razorpayOrderId: order.id,
        amount: Math.round(finalAmount * 100),
        key: process.env.RAZORPAY_KEY_ID,
        orderDbId: newOrder._id,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

// Create Order

// Verify Payment
// app.post("/api/payment/verify", async (req, res) => {

const orderVerifyPayment = async (req, res) => {
  try {
    console.log("Verifying payment...");

    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, orderDbId } =
      req.body;

    const crypto = require("crypto");

    const body = `${razorpayOrderId}|${razorpayPaymentId}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpaySignature) {
      // update order
      await Order.findByIdAndUpdate(orderDbId, {
        $set: {
          status: "Paid",
          "paymentInfo.orderId": razorpayOrderId,
          "paymentInfo.paymentId": razorpayPaymentId,
          "paymentInfo.signature": razorpaySignature,
        },
      });

      return res.json({ success: true, message: "Payment Verified" });
    }

    return res
      .status(400)
      .json({ success: false, message: "Invalid Signature" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = { createOrder, orderVerifyPayment };
