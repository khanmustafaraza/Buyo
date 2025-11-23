const successMiddleware = (req, res, next) => {
  res.success = (data, msg = "Request successful!", statusCode = 200) => {
    if (data) {
      res.status(statusCode).json({
        success: true,
        msg,
        data,
      });
    } else {
      res.status(statusCode).json({
        success: true,
        msg,
      });
    }
  };
  next();
};

module.exports = successMiddleware;
