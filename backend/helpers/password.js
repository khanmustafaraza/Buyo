const bcryptjs = require("bcryptjs");

// Generate hashed password
const generateHashPassword = async (password) => {
  const saltRounds = 10; // number of salt rounds
  const hashedPassword = await bcryptjs.hash(password, saltRounds);
  return hashedPassword;
};

// Compare plain password with hashed password
const comparePassword = async (password, hashedPassword) => {
  return bcryptjs.compare(password, hashedPassword);
};

module.exports = { generateHashPassword, comparePassword };
