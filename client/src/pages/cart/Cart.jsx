import React, { useEffect, useState } from "react";
import "./cart.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    carts,
    increaseQty,
    decreaseQty,
    handleCartItemDeleted,
    getAllCartItems,
    cartDelete,
    address
  } = useCart();
  
  const navigate = useNavigate();
  console.log(address)
  

  const totalAmount = carts.reduce(
    (acc, item) => acc + item.product.sp * item.quantity,
    0
  );

  // Fetch all cart items when component mounts or cartDelete changes
  useEffect(() => {
    getAllCartItems();
  }, [cartDelete]);


 

  return (
    <>
      <Navbar />

      {carts.length > 0 ? (
        <div className="cart-wrapper elegant-cart">
          {/* Address Section */}
          <div className="address-box elegant-address">
           {
            address.length ==0? <button>Add Address</button>:<>
            {
              address.map((cur)=>{
                return <>this</>
              })
            }
            
            </>
           }
          </div>

          <div className="cart-container elegant-cart-container">
            {/* LEFT - Cart Items */}
            <div className="cart-left elegant-left">
              {carts.map((item) => (
                <div key={item._id} className="cart-item elegant-card">
                  {/* Image */}
                  <div className="img-box">
                    <img
                      src={`http://localhost:5000/api/photo/get-all-photo/${item.product._id}`}
                      alt={item.product.name}
                      className="item-img"
                    />
                  </div>

                  {/* Details */}
                  <div className="item-info elegant-info">
                    <h3 className="item-title">{item.product.name}</h3>

                    <div className="meta">
                      <p>
                        Brand: <span>{item.product.brandname}</span>
                      </p>
                      <p>
                        Category: <span>{item.product.catname}</span>
                      </p>
                    </div>

                    <div className="price-section">
                      <span className="sp">₹ {item.product.sp}</span>
                      <span className="mrp">₹ {item.product.mrp}</span>
                      <span className="discount">{item.product.discount}% OFF</span>
                    </div>

                    <p className="description">{item.product.description}</p>

                    <div className="extra-details">
                      <span>Unit: {item.product.unit}</span>
                      <span>Package: {item.product.packageType}</span>
                      <span className={`veg-tag ${item.product.vegornon}`}>
                        {item.product.vegornon}
                      </span>
                    </div>

                    <div className="date-row">
                      <span>Mfg: {item.product.manufacturingDate?.slice(0, 10)}</span>
                      <span>Exp: {item.product.expiryDate?.slice(0, 10)}</span>
                    </div>

                    <p className="remark">
                      <strong>Remark:</strong> {item.product.remark}
                    </p>

                    <div className="qty-row">
                      <button onClick={() => decreaseQty(item._id)} className="qty-btn">
                        −
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button onClick={() => increaseQty(item._id)} className="qty-btn">
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn elegant-remove"
                      onClick={() => handleCartItemDeleted(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT - Price Summary */}
            <div className="cart-right elegant-right">
              <div className="price-box elegant-price-box">
                <h4>PRICE DETAILS</h4>
                <hr />

                <div className="price-row">
                  <span>Price ({carts.length} items)</span>
                  <span>₹ {totalAmount}</span>
                </div>

                <div className="price-row">
                  <span>Discount</span>
                  <span className="green">− ₹ 200</span>
                </div>

                <div className="price-row">
                  <span>Delivery Charges</span>
                  <span className="green">FREE</span>
                </div>

                <hr />

                <div className="price-row total">
                  <strong>Total Amount</strong>
                  <strong>₹ {totalAmount - 200}</strong>
                </div>

                <button className="place-btn elegant-place-btn">PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#444",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "40px 60px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              textAlign: "center",
              maxWidth: "450px",
            }}
          >
            <h2 style={{ fontSize: "28px", marginBottom: "10px", fontWeight: 600 }}>
              Your Cart is Empty
            </h2>

            <p style={{ fontSize: "15px", color: "#666", marginBottom: "25px" }}>
              Looks like you haven’t added anything yet.  
              Explore our products and start shopping!
            </p>

            <button
              onClick={() => navigate("/products")}
              style={{
                padding: "12px 26px",
                borderRadius: "10px",
                background: "#4b7bec",
                border: "none",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#3867d6")}
              onMouseOut={(e) => (e.target.style.background = "#4b7bec")}
            >
              Browse Products
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
