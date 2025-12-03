import React, { useEffect } from "react";
import MainLayout from "../../../layouts/mainlayout/MainLayout";
import "./allproducts.css";
import { useProduct } from "../../../context/ProductContext";
import { NavLink } from "react-router-dom";
import { useCategory } from "../../../context/CategoryContext";

const AllProducts = () => {
  const { state, getAllProducts, categoryProduct } = useProduct();
  const {
    state: { categories },
  } = useCategory();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <MainLayout>
      <section className="shop-section">
        {/* ---------------- FILTER SIDEBAR ---------------- */}
        <aside className="flip-sidebar">
          <h2 className="sidebar-title">Filters</h2>

          {/* Category */}
          <div className="sidebar-block">
            <h4>Category</h4>
            {categories?.map((item, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  value={item.name}
                  onChange={(e) => categoryProduct(e.target.value)}
                />{" "}
                {item.name}
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="sidebar-block">
            <h4>Price</h4>
            {[
              "Under ₹1,000",
              "₹1,000 - ₹5,000",
              "₹5,000 - ₹10,000",
              "Above ₹10,000",
            ].map((item, i) => (
              <label key={i}>
                <input type="radio" name="price" /> {item}
              </label>
            ))}
          </div>

          {/* Brand */}
          <div className="sidebar-block">
            <h4>Brand</h4>
            {["Samsung", "Apple", "Vivo", "OnePlus"].map((item, i) => (
              <label key={i}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        </aside>

        {/* ---------------- PRODUCTS GRID ---------------- */}
        <main className="flip-products">
          <div className="products-header">
            <h2>All Products</h2>

            <select className="sort-select">
              <option>Sort by: Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          {/* Cards Grid */}
          <div className="flip-grid">
            {state?.allProducts?.map((product) => (
              <NavLink
                to={`/product-detail/${product._id}`}
                className="flip-card"
              >
                {/* ❤️ Wishlist Icon */}
                <div className="wishlist-btn">♡</div>

                <div className="flip-img-box">
                  <img
                    src={`http://localhost:5000/api/photo/get-all-photo/${product._id}`}
                    alt={product.name}
                  />
                </div>

                <div className="flip-info">
                  <p className="brand">{product.brandname}</p>
                  <p className="product-title">{product.name}</p>

                  <div className="price-row">
                    <span className="final-price">₹{product.sp}</span>
                    <span className="mrp">₹{product.mrp}</span>
                    <span className="discount">{product.discount}% OFF</span>
                  </div>
                </div>

                {/* Quick View Button */}
                <button className="quick-view">Quick View</button>
              </NavLink>
            ))}
          </div>
        </main>
      </section>
    </MainLayout>
  );
};

export default AllProducts;
