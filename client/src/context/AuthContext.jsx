import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/AuthReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AuthAppContext = createContext();

// TODO ======================intialization of initila state==========================

const initialState = {
  isLoading: false,
  register: {
    name: "",
    email: "",
    password: "",
  },
  login: {
    email: "",
    password: "",
  },
  token: "",
  address: {
    fullName: "",
    mobile: "",
    email: "",
    houseNo: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  },
};
// ? ????????????????????????? auth provider function

const AuthAppProvider = ({ children }) => {
  // todo use navigate

  const navigate = useNavigate();
  const path = useLocation();
  const redirect = path.search.split("?redirect=")[1];
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
  }, []);

  // ? *************use reducers***************

  const [state, dispatch] = useReducer(reducer, initialState);

  // ? *************************handleRegister Change function********************

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "HANDLE_REGISTER_CHANGE",
      payload: {
        name,
        value,
      },
    });
  };
  // !######################## handle login change function###############################

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "HANDLE_LOGIN_CHANGE",
      payload: {
        name,
        value,
      },
    });
  };

  // ? ==========================handle reigster function===========================

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const { register } = state;
      const { name, email, password } = register;
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/new-register",
        {
          name,
          email,
          password,
        }
      );

      if (data.success) {
        console.log(data);
        dispatch({
          type: "SET_SUCCESS",
        });
        toast.success(data.msg);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };
  // ?================================ handle login submit============================
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { login } = state;
    const { email, password } = login;
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(data.token);
      if (data.success) {
        console.log(data.token);
        dispatch({
          type: "SET_TOKEN",
          payload: data.token,
        });
        localStorage.setItem("token", data.token);
        toast.success(data.msg);
        navigate(redirect ? redirect : "/");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  // ! ==============set token to local storage

 
  const handleAddressChange = (e) => {
    console.log(e.target);
    dispatch({
      type: "HANDLE_ADDRESS_CHANGE",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

 const handleAddressSubmit = async (e) => {
  e.preventDefault();

  try {
    const { address, token } = state;

    if (!token) {
      console.error("No token provided");
      return;
    }

    const {
      fullName,
      mobile,
      email,
      houseNo,
      street,
      city,
      state: userState,
      pincode,
      landmark,
      instructions,
      addressType,
      isDefault,
    } = address;

    // SIMPLE VALIDATION (recommended)
    if (
      !fullName ||
      !mobile ||
      !email ||
      !houseNo ||
      !street ||
      !city ||
      !userState ||
      !pincode
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const { data } = await axios.post(
      "http://localhost:5000/api/address/add-address",
      {
        fullName,
        mobile,
        email,
        houseNo,
        street,
        city,
        state: userState,
        pincode,
        landmark,
        instructions,
        addressType,
        isDefault,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (data.success) {
      alert("Address saved successfully!");
      console.log("Address saved:", data);

      // OPTIONAL — CLEAR FORM
      // setState({ ...state, address: {} });
    }
  } catch (error) {
    console.error("Error saving address:", error);
    alert("Something went wrong while saving the address.");
  }
};

  return (
    <AuthAppContext.Provider
      value={{
        state,
        handleRegisterChange,
        handleRegisterSubmit,
        handleLoginChange,
        handleLoginSubmit,
       handleAddressSubmit,
        handleAddressChange,
      }}
    >
      {children}
    </AuthAppContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthAppContext);
};

export { AuthAppProvider, useAuth, AuthAppContext };
