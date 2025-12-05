require("dotenv").config();
// console.log(process.env);
const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/auth-router");
const adminRouter = require("./routers/admin-router");
const successMiddleware = require("./middlewares/success-middleware");
const errorMiddleware = require("./middlewares/error-middleware");
const connectDB = require("./utlis/db");
const authMiddleware = require("./middlewares/auth-middleware");
const isAdmin = require("./middlewares/admin-middleware");

// todo ? category router
const categoryRouter = require("./routers/category-router");
const categoryProductRouter = require("./routers/category-product-router");
const productRouter = require("./routers/product-router");
const photoRouter = require("./routers/photo-router");

// todo cart Router
const cartRouter = require("./routers/cart-router");
const addressRouter = require("./routers/address-router");
const orderRouter = require("./routers/order-router");

const app = express();
app.use(express.json());
app.use(cors());

// Allow OPTIONS requests
// app.options("*", cors());

app.use(successMiddleware);

// ? todo auth middleware
app.use("/api/auth", authRouter);
app.use("/api/admin", authMiddleware, isAdmin, adminRouter);

// todo all category routes api endpoints
app.use("/api/category", categoryRouter);

// ? all product routes api endpoints
app.use("/api/product", productRouter);
app.use("/api/photo", photoRouter);
app.use("/api/cart", authMiddleware, cartRouter);
app.use("/api/address", authMiddleware, addressRouter);
app.use("/api/category-product-filter", authMiddleware, categoryProductRouter);
app.use("/api/order", orderRouter);

// * this is the root for home page
app.get("/", (req, res) => {
  res.send("<h1>Server is running 🚀</h1>");
});
// error middleware (always at the end)
app.use(errorMiddleware);

const PORT = 5000;

const startServer = async () => {
  try {
    await connectDB(); // wait for DB connection first
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();
