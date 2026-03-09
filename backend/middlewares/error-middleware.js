// middleware/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    msg: err.message || "Internal Server Error",
  });
};

module.exports = errorMiddleware;
