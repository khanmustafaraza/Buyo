const Register = require("../models/register-model");

const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, msg: "Unauthorized" });
    }

    const user = await Register.findById(req.user._id);

    if (!user || !user.isAdmin) {
      return res
        .status(403)
        .json({ success: false, msg: "Access denied. Admins only!" });
    }

    // If user exists and is admin, continue
    next();
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

module.exports = isAdmin;
