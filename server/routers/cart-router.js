const express = require("express");

const router = express.Router();
const cart = require("../controllers/cart-controller");

// Route for creating a new account
router.post("/create-cart", cart.createCart);
router.get("/get-all-cart-items", cart.getAllCartItems);
router.delete("/delete-cart-item/:id", cart.deleteCartItem);

// router.post("/login", auth.login);

module.exports = router;
