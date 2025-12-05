// server.js

const Razorpay = require("razorpay");

// your Mongoose order model

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { userId, items, finalAmount, address, shippingCharges } = req.body;
    // console.log(req.body);

    // 1️⃣ Create Razorpay order
    const options = {
      amount: 3 * 100, // in paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      notes: { userId, shippingCharges },
    };

    const order = await razorpay.orders.create(options);
    console.log(order);

    // 2️⃣ Save order in MongoDB with status Pending
    // const newOrder = await Order.create({
    //   userId,
    //   items,
    //   address,
    //   amount: finalAmount,
    //   shippingCharges,
    //   paymentInfo: { orderId: order.id },
    //   status: "Pending",
    // });

    res.json({
      success: true,
      razorpayOrderId: order.id,
      amount: finalAmount,
      key: process.env.RAZORPAY_KEY_ID,
      // orderDbId: newOrder._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

// Create Order

// Verify Payment
// app.post("/api/payment/verify", async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//   const crypto = require("crypto");

//   const body = razorpay_order_id + "|" + razorpay_payment_id;
//   const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   if (expectedSignature === razorpay_signature) {
//     await Order.findOneAndUpdate(
//       { "paymentInfo.orderId": razorpay_order_id },
//       {
//         $set: {
//           "paymentInfo.paymentId": razorpay_payment_id,
//           "paymentInfo.signature": razorpay_signature,
//           status: "Paid"
//         }
//       }
//     );
//     return res.json({ success: true });
//   }

//   return res.status(400).json({ success: false });
// });

module.exports = { createOrder };
