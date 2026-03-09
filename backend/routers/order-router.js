const express = require("express");

const router = express.Router();
const order = require("../controllers/order-controller");

// Route for creating a new account
router.post("/create-order", order.createOrder);
router.post("/verify-payment", order.orderVerifyPayment);

module.exports = router;
