import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartAppContext = createContext();

const CartAppProvider = ({ children }) => {
  const {
    state: { token },
  } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isBag, setIsBag] = useState(false);

  // Add item to cart
  const handleCartAdded = (id, quantity, price) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === id);
      if (existing) {
        alert(
          "This item is already in your bag. Quantity will be increased by " +
            quantity
        );
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { id, quantity, price }];
      }
    });
    setIsBag(true);
  };

  // Save cart to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch product data from API and populate cartItems
  const getCartData = async () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const promises = storedCart.map(async (cur) => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/product/get-product/${cur.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (data.success) {
          return { ...data.data, quantity: cur.quantity };
        }
        return null;
      } catch (err) {
        console.error("Error fetching cart item:", err);
        return null;
      }
    });

    const results = await Promise.all(promises);
    console.log(results);

    // Remove nulls and duplicates (by _id)
    // const uniqueItems = Array.from(
    //   new Map(results.filter(Boolean).map((item) => [item._id, item])).values()
    // );

    setCartItems(results);
  };

  // Remove item from cart
  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCartItems);

    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartAppContext.Provider
      value={{
        handleCartAdded,
        isBag,
        getCartData,
        cart,
        cartItems,
        removeItem,
        setCartItems,
      }}
    >
      {children}
    </CartAppContext.Provider>
  );
};

const useCart = () => useContext(CartAppContext);

export { CartAppProvider, useCart };
