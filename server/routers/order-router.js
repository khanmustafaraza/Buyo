const express = require("express");

const router = express.Router();
const order = require("../controllers/order-controller");

// Route for creating a new account
router.post("/create", order.createOrder);

module.exports = router;
