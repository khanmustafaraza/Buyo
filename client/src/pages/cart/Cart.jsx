import React, { useEffect, useState } from "react";
import "./cart.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useCart } from "../../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Cart = () => {
    const navigate = useNavigate();
    const {state:{token} }=  useAuth();
    console.log(token)
  // todo active address state 
  const [activeAddress, setActiveAddress] = useState(null);

  // ! user Address inside addobje
  const [addressObj, setAddressObj] = useState(null);

  

  const {
    carts,
    increaseQty,
    decreaseQty,
    handleCartItemDeleted,
    getAllCartItems,
    cartDelete,
    address,
  } = useCart();


  // ? total amount cart reducer
  const totalAmount = carts.reduce(
    (acc, item) => acc + item.product.sp * item.quantity,
    0
  );

  useEffect(() => {
    getAllCartItems();
  }, [cartDelete]);

  const handleAddressActive = (cur, index) => {
    setActiveAddress(index);
    setAddressObj(cur);
  };

  const handleOrder = async () => {
    if (!addressObj) {
      toast.error("Please provide the address");
      return;
    }

    try {
      // Prepare order structure to send to backend
      const orderPayload = {
        items: carts.map((item) => ({
          pid: item.pid,

          price: item.price,
          quantity: item.quantity,
          // image: item.image,
        })),
        address: addressObj,

        finalAmount: totalAmount,
        paymentStatus: "PENDING",
      };
      console.log(orderPayload);

      // Call backend
      const response = await axios.post(
        "http://localhost:5000/api/order/create",
        orderPayload
      );

      if (response.data?.razorpayOrderId) {
        openRazorpayPopup(response.data); // open popup
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  const openRazorpayPopup = (orderData) => {
    const options = {
      key: orderData.key, // from backend (your RAZORPAY_KEY_ID)
      amount:
        3 * 100 || orderData.amount_in_subunits || orderData.finalAmount * 100,
      currency: orderData.currency || "INR",
      name: "My Store",
      description: "Order Payment",
      image: "https://yourwebsite.com/logo.png", // your logo

      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "User billing address",
      },
      theme: {
        color: "#0f172a",
      },
      handler: async function (response) {
        console.log("responso", response);
        // response: { razorpay_payment_id, razorpay_order_id, razorpay_signature }
        try {
          // Send to backend to verify signature and update DB
          const verifyRes = await axios.post(
            "http://localhost:5000/api/payment/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderDbId: orderData.orderDbId, // optional helpful id from your DB
            }
          );

          if (verifyRes.data?.success) {
            toast.success("Payment successful! Order confirmed.");
            // redirect to success page or clear cart
            // e.g. navigate(`/order-success/${verifyRes.data.orderId}`)
          } else {
            toast.error("Payment verification failed on server.");
          }
        } catch (err) {
          console.error("verify error:", err);
          toast.error("Server error during payment verification.");
        }
      },
      modal: {
        ondismiss: function () {
          // user closed popup without finishing payment
          toast("Payment popup closed.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // todo handle delete address 


 const handleDeleteAddress = async (cur, index) => {
  try {
   

    const { data } = await axios.delete(
      `http://localhost:5000/api/address/delete-address`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          cur,
          index,
        },
      }
    );

    if (data.success) {
      toast.success("Address deleted successfully!");
     
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete address.");
  }
};

useEffect(()=>{

},[handleDeleteAddress])


  return (
    <>
      <Navbar />

      {carts.length > 0 ? (
        <div className="elegant-cart">
          {/* Address Section */}
          <div className="elegant-address">
            {address.length === 0 ? (
              <button
                className="change-btn"
                onClick={() => navigate("/add-new-address")}
              >
                Add Address
              </button>
            ) : (
              address.map((cur, index) => (
                <div
                  key={index}
                  className={`address-card-strip ${
                    activeAddress === index ? "activeBorder" : ""
                  }`}
                  onClick={() => handleAddressActive(cur, index)}
                >
                  <div>
                    <strong>{cur.fullName}</strong> | {cur.mobile}{" "}
                    {cur.email && <>| {cur.email}</>}
                  </div>
                  <div className="address-details">
                    {cur.houseNo}, {cur.street}, {cur.city}, {cur.state} -{" "}
                    {cur.pincode}
                    
                  </div>
                  
                  <div className="address-actions">
                   
                    <button className="delete-btn"  onClick={()=>handleDeleteAddress(cur,index)}>Delete</button>
                  </div>
                </div>
              ))
            )}
            {
              !address.length == 0 && <NavLink to="/add-new-address">
                      <button className="edit-btn"><FaPlus/> Address</button>
                    </NavLink>
            }
          </div>

          {/* Cart & Summary */}
          <div className="elegant-cart-container">
            {/* LEFT - Cart Items */}
            <div className="elegant-left">
              {carts.map((item) => (
                <div key={item._id} className="elegant-card">
                  {/* Cross remove button */}
                  <span
                    className="elegant-remove-cross"
                    onClick={() => handleCartItemDeleted(item._id)}
                    title="Remove Item"
                  >
                    &times;
                  </span>

                  {/* Product Image */}
                  <div className="img-box">
                    <img
                      src={`http://localhost:5000/api/photo/get-all-photo/${item.product._id}`}
                      alt={item.product.name}
                      className="item-img"
                    />
                    {item.product.discount > 0 && (
                      <span className="discount-badge">
                        {item.product.discount}% OFF
                      </span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="item-info">
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
                      <span className="sp">
                        ₹ {Number(item.product.sp).toFixed(2)}
                      </span>
                      <span className="mrp">₹ {item.product.mrp}</span>
                    </div>

                    <div className="extra-details">
                      <span>Unit: {item.product.unit}</span>
                      <span>Package: {item.product.packageType}</span>
                      <span className={`veg-tag ${item.product.vegornon}`}>
                        {item.product.vegornon}
                      </span>
                    </div>

                    <div className="qty-row">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="qty-btn"
                      >
                        −
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item._id)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping Button */}
              <button
                className="continue-btn"
                style={{ marginTop: "20px", width: "200px" }}
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </button>
            </div>

            {/* RIGHT - Price Summary */}
            <div className="elegant-right">
              <div className="elegant-price-box">
                <h4>PRICE DETAILS</h4>
                <hr />
                <div className="price-row">
                  <span>Price ({carts.length} items)</span>
                  <span>₹ {Number(totalAmount).toFixed(2)}</span>
                </div>
                {/* <div className="price-row">
                  <span>Discount</span>
                  <span className="green">− ₹ 200</span>
                </div> */}
                <div className="price-row">
                  <span>Delivery Charges</span>
                  <span className="green">
                    ₹{totalAmount < 500 ? "10" : "FREE"}
                  </span>
                </div>
                <hr />
                <div className="price-row total">
                  <strong>Total Amount</strong>
                  <strong>
                    ₹
                    {totalAmount < 500
                      ? Number(totalAmount + 10).toFixed(2)
                      : Number(totalAmount).toFixed(2)}
                  </strong>
                </div>
                <button
                  className="elegant-place-btn"
                  onClick={() => handleOrder(carts)}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart
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
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              Your Cart is Empty
            </h2>
            <p
              style={{ fontSize: "15px", color: "#666", marginBottom: "25px" }}
            >
              Looks like you haven’t added anything yet. Explore our products
              and start shopping!
            </p>
            <button
              onClick={() => navigate("/products")}
              style={{
                padding: "12px 26px",
                borderRadius: "10px",
                background: "#ff3f6c",
                border: "none",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#e0325a")}
              onMouseOut={(e) => (e.target.style.background = "#ff3f6c")}
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
