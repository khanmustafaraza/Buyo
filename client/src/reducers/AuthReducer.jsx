const HANDLE_REGISTER_CHANGE = "HANDLE_REGISTER_CHANGE";
const HANDLE_LOGIN_CHANGE = "HANDLE_LOGIN_CHANGE";
const SET_LOADING = "SET_LOADING";
const SET_SUCCESS = "SET_SUCCESS";
const SET_TOKEN = "SET_TOKEN";
const HANDLE_ADDRESS_CHANGE = "HANDLE_ADDRESS_CHANGE";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case HANDLE_REGISTER_CHANGE:
      return {
        ...state,
        register: {
          ...state.register,
          [action.payload.name]: action.payload.value,
        },
      };
    case HANDLE_LOGIN_CHANGE:
      return {
        ...state,
        login: {
          ...state.login,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      case HANDLE_ADDRESS_CHANGE:
        return{
          ...state,
          address:{
            ...state.address,
            [action.payload.name] :action.payload.value
          }
        }

    default:
      return state;
  }
};

export default AuthReducer;
