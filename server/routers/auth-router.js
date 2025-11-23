const express = require("express");

const router = express.Router();
const auth = require("../controllers/auth-controller");

// Route for creating a new account
router.post("/new-register", auth.register);
router.post("/login", auth.login);

module.exports = router;
