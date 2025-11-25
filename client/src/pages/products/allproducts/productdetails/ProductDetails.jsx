import React, { useEffect, useState } from "react";
import "./productdetails.css";
import MainLayout from "../../../../layouts/mainlayout/MainLayout";
import { useProduct } from "../../../../context/ProductContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../../context/CartContext";
import { useAuth } from "../../../../context/AuthContext";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { handleCartItemAdded, quantity, handleQuantity } = useCart();
  const {
    state: { token },
  } = useAuth();

  // const [quantity, setQuantity] = useState(1);
  // const [activeIdx, setActiveIdx] = useState(0);
  // const { handleCartAdded, isBag } = useCart();
  const { id } = useParams();
  const pathName = useLocation().pathname;
  const { getProductDetail, state } = useProduct();
  const product = state.product || {};

  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  // const handleQty = (type) =>
  //   setQuantity((q) => Math.max(1, type === "inc" ? q + 1 : q - 1));

  return (
    <MainLayout>
      <div className="flip-a">
        <div className="flip-a-left">
          <div className="flip-a-main-image">
            <img
              src={`http://localhost:5000/api/photo/get-all-photo/${product._id}`}
              alt={product.name}
            />
          </div>
        </div>

        <div className="flip-a-right">
          <h1 className="title">{product.name}</h1>
          <div className="sub">
            <span className="brand">{product.brandname}</span>
            <span className="assured">• Assured</span>
          </div>

          <div className="rating">
            <div className="score">{product.rating || 0} ★</div>
            <div className="reviews">(1,234 ratings)</div>
          </div>

          <div className="price-row">
            <div className="sp">₹{product.sp}</div>
            <div className="mrp">₹{product.mrp}</div>
            <div className="disc">{product.discount}% off</div>
          </div>

          <div className="offers">
            <h4>Offers</h4>
            <ul>
              <li>Bank Offer: 10% off on XYZ Bank cards</li>
              <li>Special Price: Extra 5% off (price inclusive of discount)</li>
            </ul>
          </div>

          <div className="meta-grid">
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

          <div className="qty-row">
            <div className="qty-controls">
              <button onClick={() => handleQuantity("dec")}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantity("inc")}>+</button>
            </div>

            <div className="actions">
              {/* {isBag ? (
                <NavLink to="/cart" className="btn go">
                  Go to Bag
                </NavLink>
              ) : (
               
              )} */}
              <button
                className="btn add"
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
          </div>

          <div className="desc">
            <h4>About this item</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
