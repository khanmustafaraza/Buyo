import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/CategoryReducer";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const CategoryAppContext = createContext();

const initialState = {
  isLoading: false,
  categoryField: {
    name: "",
    photo: null,
  },
  categories: [],
  isDelete: false,
};

const CategoryAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    state: { token },
  } = useAuth();

  // ---------------------------
  // HANDLE INPUT CHANGE
  // ---------------------------
  const handleCategoryChange = (e) => {
    const { name } = e.target;
    const updatedValue = name === "name" ? e.target.value : e.target.files[0];

    dispatch({
      type: "HANDLE_CATEGORY_CHANGE",
      payload: { name, updatedValue },
    });
  };

  // ---------------------------
  // CREATE CATEGORY
  // ---------------------------
  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const { name, photo } = state.categoryField;
    formData.append("name", name);
    formData.append("photo", photo);
    console.log(formData);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/category/create-category",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        toast.success(data.msg);
        getAllCategories(); // ✔ Refresh list automatically
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Something went wrong");
    }
  };

  // ---------------------------
  // GET ALL CATEGORIES
  // ---------------------------
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/category/get-all-category",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        dispatch({
          type: "GET_ALL_CATEGORIES",
          payload: data.data,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Failed to load categories");
    }
  };

  // ---------------------------
  // DELETE CATEGORY
  // ---------------------------
  const handleCategoryDelete = async (id) => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "HANDLE_CATEGORY_DELETE" });

    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/category/delete-category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        dispatch({ type: "SET_SUCCESS" });
        toast.success(data.msg);
        getAllCategories(); // ✔ Refresh
      }
    } catch (error) {
      toast.error("Delete failed");
    }
  };
useEffect(()=>{
getAllCategories()
},[])
  return (
    <CategoryAppContext.Provider
      value={{
        state,
        handleCategoryChange,
        handleCategorySubmit,
        getAllCategories,
        handleCategoryDelete,
      }}
    >
      {children}
    </CategoryAppContext.Provider>
  );
};

const useCategory = () => useContext(CategoryAppContext);

export { CategoryAppProvider, useCategory };
