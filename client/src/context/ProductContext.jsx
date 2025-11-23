import axios from "axios";
import reducer from "../reducers/ProductReducer";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const ProductAppContext = createContext();
const initialState = {
  allProducts: [],
  product: {},
  productField: {
    catname: "",

    name: "",
    brandname: "",
    mrp: "",
    discount: "",
    sp: "",
    unit: "",

    packageType: "",
    manufacturingDate: "",
    expiryDate: "",
    vegornon: "",
    remark: "",
    description: "",
    rating: "",
    photo: "",
  },
};

const ProductAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    state: { token },
  } = useAuth();
  // console.log(state.productField);

  // todo set product change

  const handleProductChange = (e) => {
    const { name, value } = e.target;

    const updatedValue = name === "photo" ? e.target.files[0] : value;

    // Convert FileList to array if multiple images selected

    dispatch({
      type: "HANDLE_PRODUCT_CHANGE",
      payload: {
        name,
        value: updatedValue,
      },
    });
  };

  //   todo handle submit Product
  const handleProductSubmit = async (e) => {
    e.preventDefault();

    const {
      productField: {
        catname,
        subcatname,
        name,
        brandname,
        mrp,
        discount,
        sp,
        unit,

        manufacturingDate,
        expiryDate,
        vegornon,
        remark,
        description,
        rating,
        photo,
        packageType,
      },
    } = state;

    const formData = new FormData();

    // Append text fields
    formData.append("catname", catname);

    formData.append("name", name);
    formData.append("brandname", brandname);
    formData.append("mrp", mrp);
    formData.append("discount", discount);
    formData.append("sp", sp);
    formData.append("unit", unit);
    formData.append("packageType", packageType);

    formData.append("manufacturingDate", manufacturingDate);
    formData.append("expiryDate", expiryDate);
    formData.append("vegornon", vegornon);
    formData.append("remark", remark);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("photo", photo);
    console.log(state.productField.sp);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/product/create-product",
        formData,
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        toast.success(data.msg);
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Something went wrong");
    }
  };

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/product/get-all-product",
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data);

      if (data.success) {
        // console.log(data);
        dispatch({
          type: "GET_ALL_PRODUCTS",
          payload: data.data,
        });
      }
    } catch (error) {
      toast(error.response.data.msg);
    }
  };
  const getProductDetail = async (id) => {
    try {
      const api = `http://localhost:5000/api/product/get-product/${id}`;

      const { data } = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(data.singleProduct);
      if (data.success) {
        dispatch({
          type: "GET_PRODUCT_DETAIL",
          payload: data?.data,
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <ProductAppContext.Provider
      value={{
        state,
        getProductDetail,

        handleProductChange,
        handleProductSubmit,
        getAllProducts,
      }}
    >
      {children}
    </ProductAppContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductAppContext);
};
export { ProductAppProvider, useProduct };
