import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartAppContext = createContext();

const CartAppProvider = ({ children }) => {
  const {
    state: { token },
  } = useAuth();

  const [quantity, setQuantity] = useState(1);
  const [carts, setCart] = useState([]);

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

  const handleQuantity = (type) => {
    setQuantity((prev) => {
      if (type === "inc") return prev + 1;
      return prev > 1 ? prev - 1 : 1;
    });
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

    if (data.success) setCart(data.carts);
  };

  // ⭐ FETCH CART WHEN TOKEN LOADED (after refresh)
  useEffect(() => {
    if (token) {
      getAllCartItems();
    }
  }, [token]);

  return (
    <CartAppContext.Provider
      value={{
        handleCartItemAdded,
        quantity,
        handleQuantity,
        getAllCartItems,
        carts,
      }}
    >
      {children}
    </CartAppContext.Provider>
  );
};

const useCart = () => useContext(CartAppContext);

export { CartAppProvider, useCart };
