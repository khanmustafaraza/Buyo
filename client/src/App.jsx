import React from "react";
import Cart from "./pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import { Flip, ToastContainer } from "react-toastify";
import AllProducts from "./pages/products/allproducts/AllProducts";

// todo  admin routes import start
import AdminRoute from "./routes/adminroute/AdminRoute";
import NewProduct from "./pages/admin/products/newproduct/NewProduct";
import ProductList from "./pages/admin/products/productlist/ProductList";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import CategoryList from "./pages/admin/category/categorylist/CategoryList";
import NewCategory from "./pages/admin/category/newcategory/NewCategory";
import About from "./pages/about/About";
import ProductDetails from "./pages/products/allproducts/productdetails/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import Address from "./pages/address/Address";
import Payment from "./pages/payment/Payment";
import AccountDashboard from "./pages/accountdashboard/AccountDashboard";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Contact from "./pages/contact/Contact";
import { Bounce } from "react-toastify";
// ? admin routes end

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/singleproduct/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-details" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account-dashboard" element={<AccountDashboard />} />

        {/*✅ ================= todo all admin routes start ========== */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="admin-dashboard" element={<AdminDashboard />} />

          <Route path="create-new-category" element={<NewCategory />} />
          <Route path="category-list" element={<CategoryList />} />

          <Route path="create-new-product" element={<NewProduct />} />

          <Route path="product-list" element={<ProductList />} />

          {/* <Route path="category" element={<Category />} />

          <Route path="product" element={<Product />} /> */}

          {/* <Route path="productlist" element={<ProductList />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
