const express = require("express");

const router = express.Router();

router.post("/admin-auth", (req, res) => {
  // At this point authMiddleware + isAdmin have already run
  res.json({
    success: true,
    isAdmin: true,
    msg: "You can access all admin routes",
  });
});

module.exports = router;
