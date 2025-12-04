import React, { useEffect } from "react";
import "./productdetails.css";
import MainLayout from "../../../../layouts/mainlayout/MainLayout";
import { useProduct } from "../../../../context/ProductContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../../context/CartContext";
import { useAuth } from "../../../../context/AuthContext";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { handleCartItemAdded, quantity, handleQuantity } = useCart();
  const { state: { token } } = useAuth();

  const { id } = useParams();
  const pathName = useLocation().pathname;
  const { getProductDetail, state } = useProduct();
  const product = state.product || {};

  useEffect(() => {
    getProductDetail(id);
  }, [id]);
  // new Array()
  

  return (
    <MainLayout>
      <div className="pd-wrapper">
        {/* LEFT - Image */}
        <div className="pd-left">
          <div className="pd-image">
            <img
              src={`http://localhost:5000/api/photo/get-all-photo/${product._id}`}
              alt={product.name}
            />
            {product.discount > 0 && (
              <span className="discount-badge">{product.discount}% OFF</span>
            )}
          </div>
        </div>

        {/* RIGHT - Details */}
        <div className="pd-right">
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-brand">
            <span>{product.brandname}</span>
            <span className="assured">• Assured</span>
          </div>

          <div className="pd-rating">
            <div className="score">{product.rating || 0} ★</div>
          
          </div>

          <div className="pd-price">
            <span className="sp">₹{Number(product.sp).toFixed(2)}</span>
            <span className="mrp">₹{product.mrp}</span>
            {product.discount > 0 && <span className="disc">{product.discount}% off</span>}
          </div>

        

          <div className="pd-meta-grid">
            <div>
              <strong>Unit</strong>
              <div>{product.unit}</div>
            </div>
            <div>
              <strong>Pack</strong>
              <div>{product.packageType}</div>
            </div>
            <div>
              <strong>MFG</strong>
              <div>{product.manufacturingDate?.slice(0, 10) || "-"}</div>
            </div>
            <div>
              <strong>EXP</strong>
              <div>{product.expiryDate?.slice(0, 10) || "-"}</div>
            </div>
          </div>

          <div className="pd-actions">
            <div className="qty-controls">
              <button onClick={() => handleQuantity("dec")}>−</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantity("inc")}>+</button>
            </div>

            <button
              className="btn-add"
              onClick={() => {
                if (token) {
                  handleCartItemAdded(product._id, quantity, product.sp);
                } else {
                  navigate(`/login?redirect=${pathName}`);
                }
              }}
            >
              Add to Cart
            </button>
          </div>

          <div className="pd-desc">
            <h4>About this item</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      

      <h2>Top Related Products</h2>
    </MainLayout>
  );
};

export default ProductDetails;
