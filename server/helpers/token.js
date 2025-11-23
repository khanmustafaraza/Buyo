const jwt = require("jsonwebtoken");

// Create a JWT token
const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SCERET, {
    expiresIn: "7d", // token validity
  });
};

// Verify a JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SCERET); // returns decoded payload if valid
  } catch (err) {
    return null; // token invalid/expired
  }
};

module.exports = { createToken, verifyToken };
