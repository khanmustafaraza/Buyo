import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

const CartAppContext = createContext();

const CartAppProvider = ({ children }) => {
  const {
    state: { token },
  } = useAuth();

  const [quantity, setQuantity] = useState(1);
  const [cartDelete, setCartDelete] = useState(false);
  const [carts, setCart] = useState([]);
  const [address, setAddress] = useState([]);
  const [payMentMethod, setPayMentMethod] = useState("");
  const [addressObj, setAddressObj] = useState(null);

  const handleCartItemAdded = async (pid, quantity, price) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/cart/create-cart",
      { pid, quantity, price },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert(data.msg);
  };

  const getAllCartItems = async () => {
    if (!token) return;

    const { data } = await axios.get(
      "http://localhost:5000/api/cart/get-all-cart-items",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (data.success) {
      setCart(data.carts);
      setAddress(data.user);
    }
  };

  // ⭐ FETCH CART WHEN TOKEN LOADED (after refresh)
  useEffect(() => {
    if (token) {
      getAllCartItems();
    }
  }, [token]);

  // handle Cart Item Deleted
  const handleCartItemDeleted = async (id) => {
    if (!token) return;

    const { data } = await axios.delete(
      `http://localhost:5000/api/cart/delete-cart-item/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.success) {
      setCartDelete(!cartDelete);
    }
  };

  useEffect(() => {
    getAllCartItems();
  }, []);
  // Increase quantity in frontend only
  const increaseQty = (productId) => {
    setCart((prev) =>
      prev.map((c) =>
        c._id === productId ? { ...c, quantity: c.quantity + 1 } : c
      )
    );
  };

  // Decrease quantity in frontend only
  const decreaseQty = (productId) => {
    setCart((prev) =>
      prev.map((c) =>
        c._id === productId
          ? { ...c, quantity: c.quantity > 1 ? c.quantity - 1 : 1 }
          : c
      )
    );
  };
  const handleQuantity = (type) => {
    setQuantity((prev) => {
      if (type === "inc") return prev + 1;
      return prev > 1 ? prev - 1 : 1;
    });
  };

  const openRazorpayPopup = (order) => {
    const options = {
      key: order.key,
      amount: order.amount * 100,
      currency: "INR",
      order_id: order.razorpayOrderId,
      name: "Buyo Store",
      description: "Payment",
      image: "https://via.placeholder.com/100", // optional

      // 💳 Prefill user info (optional but recommended)
      prefill: {
        name: "Customer",
        email: "example@email.com",
        contact: "9999999999",
      },

      // 🎨 UI theme
      theme: {
        color: "#0084ff",
      },

      // ⚠️ Prevent closing accidentally
      modal: {
        escape: false,
        confirm_close: true,
      },

      handler: async function (response) {
        console.log("response", response);

        try {
          const verifyRes = await axios.post(
            "http://localhost:5000/api/order/verify-payment",
            {
              razorpayOrderId: order.razorpayOrderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              orderDbId: order.orderDbId,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Payment verified:", verifyRes.data);

          alert("Payment Success 🎉");
        } catch (error) {
          alert("Payment verification failed ❌");
          console.error(error);
        }
      },
    };

    const razor = new window.Razorpay(options);

    razor.on("payment.failed", function (response) {
      alert("Payment Failed ❌");
      console.log("failure", response);
    });

    razor.open();
  };

  const handleChekOut = async (order) => {
    try {
      // Prepare order structure to send to backend

      // Call backend
      const response = await axios.post(
        "http://localhost:5000/api/order/create-order",
        order,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      if (response.data?.razorpayOrderId) {
        openRazorpayPopup(response.data); // open popup
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  const handleOrder = async (totalAmount) => {
    console.log(carts);
    const orderObj = {
      items: carts.map((cur) => {
        return {
          productId: cur._id,
          qty: cur.quantity,
          price: cur.price,
        };
      }),

      addressObj: addressObj,
      payMentMethod: payMentMethod,
      finalAmount: totalAmount,
    };

    if (payMentMethod == "") {
      toast("Check the Payment Method");
      return;
    } else if (payMentMethod == "cash on deliver") {
      if (addressObj == null) {
        toast("Provide the Address");
        return;
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/order/create-order",
        orderObj,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else if (payMentMethod == "online payment") {
      if (addressObj == null) {
        toast("Provide the Address");
        return;
      }
      handleChekOut(orderObj);
    }
  };
  return (
    <CartAppContext.Provider
      value={{
        handleCartItemAdded,
        quantity,
        handleQuantity,
        getAllCartItems,
        carts,
        handleCartItemDeleted,
        cartDelete,
        address,
        decreaseQty,
        increaseQty,
        setPayMentMethod,
        setAddressObj,
        handleOrder,
      }}
    >
      {children}
    </CartAppContext.Provider>
  );
};

const useCart = () => useContext(CartAppContext);

export { CartAppProvider, useCart };
