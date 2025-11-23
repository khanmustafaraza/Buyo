const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "HANDLE_CATEGORY_CHANGE": {
      return {
        ...state,
        categoryField: {
          ...state.categoryField,
          [action.payload.name]: action.payload.updatedValue,
        },
      };
    }
    case "GET_ALL_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "HANDLE_CATEGORY_DELETE": {
      return {
        ...state,
        isDelete: true,
      };
    }
    case "SET_SUCCESS": {
      return {
        ...state,
        isDelete: false,
        isLoading: false,
      };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
export default reducer;
