const express = require("express");

const router = express.Router();
const address = require("../controllers/address-controller");

// Route for creating a new account
router.post("/add-address", address.addAddress);
router.delete("/delete-address", address.deleteAddress);

module.exports = router;
