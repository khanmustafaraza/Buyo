import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartAppContext = createContext();

const CartAppProvider = ({ children }) => {
  const {
    state: { token },
  } = useAuth();

  const [quantity, setQuantity] = useState(1);
   const[cartDelete,setCartDelete] = useState(false)
  const [carts, setCart] = useState([]);
  const[address,setAddress] = useState([])

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

    if (data.success){
      setCart(data.carts);
      setAddress(data.user)

    }
      
  };

  // ⭐ FETCH CART WHEN TOKEN LOADED (after refresh)
  useEffect(() => {
    if (token) {
      getAllCartItems();
    }
  }, [token]);

  // handle Cart Item Deleted
  const handleCartItemDeleted = async(id) =>{
   if (!token) return;

    const { data } = await axios.delete(
      `http://localhost:5000/api/cart/delete-cart-item/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(data.success){
      setCartDelete(!cartDelete)
    }

  

  }

   useEffect(() => {
    getAllCartItems();
  }, []);
  // Increase quantity in frontend only
const increaseQty = (productId) => {
  setCart(prev =>
    prev.map(c =>
      c._id === productId ? { ...c, quantity: c.quantity + 1 } : c
    )
  );
};

// Decrease quantity in frontend only
const decreaseQty = (productId) => {
  setCart(prev =>
    prev.map(c =>
      c._id === productId
        ? { ...c, quantity: c.quantity > 1 ? c.quantity - 1 : 1 }
        : c
    )
  );
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
        increaseQty
      }}
    >
      {children}
    </CartAppContext.Provider>
  );
};

const useCart = () => useContext(CartAppContext);

export { CartAppProvider, useCart };
