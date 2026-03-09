const { verifyToken } = require("../helpers/token");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  // console.log(authHeader);
  // console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return res
      .status(401)
      .json({ success: false, msg: "Invalid or expired token" });
  }
  // console.log("decoded", decoded);
  req.user = decoded; // attach user payload to request
  // console.log("req.user", req.user);
  next();
};

module.exports = authMiddleware;
