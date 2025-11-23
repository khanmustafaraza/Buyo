import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/AuthReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthAppContext = createContext();

// TODO ======================intialization of initila state==========================

const initialState = {
  isLoading: false,
  registerField: {
    name: "",

    email: "",
    password: "",
  },
  loginField: {
    email: "",
    password: "",
  },
  token: localStorage.getItem("token") || "",
};
// ? ????????????????????????? auth provider function

const AuthAppProvider = ({ children }) => {
  // todo use navigate

  const navigate = useNavigate();

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
      const { registerField } = state;
      const { name, email, password } = registerField;
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
    const { loginField } = state;
    const { email, password } = loginField;
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

      if (data.success) {
        console.log(data);
        dispatch({
          type: "SET_TOKEN",
          payload: data.token,
        });
        localStorage.setItem("token", data.token);
        toast.success(data.msg);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  // ! ==============set token to local storage

  return (
    <AuthAppContext.Provider
      value={{
        state,
        handleRegisterChange,
        handleRegisterSubmit,
        handleLoginChange,
        handleLoginSubmit,
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
