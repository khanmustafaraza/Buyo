const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_PRODUCT_CHANGE":
      const { name, value } = action.payload;
      const updatedProduct = {
        ...state.productField,
        [name]: value,
      };

      // Auto–calculate SP when MRP or discount changes
      const mrp = Number(updatedProduct.mrp);
      const discount = Number(updatedProduct.discount);

      if (!isNaN(mrp) && !isNaN(discount)) {
        updatedProduct.sp = mrp - mrp * (discount / 100);
      }

      return {
        ...state,
        productField: updatedProduct,
      };

    case "SET_PRODUCT_INPUT": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }

    case "GET_ALL_PRODUCTS": {
      return {
        ...state,
        allProducts: action.payload,
        allProductsBackup: action.payload
      };
    }
    case "GET_PRODUCT_DETAIL": {
      return {
        ...state,
        isLoading: true,
        product: action.payload,
      };
    }
    case "CHECKBOX_NAME_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        selectname: "",
        inputname: "",
        selectdesc: "",
        [name]: value,
      };
    }
    case "INPUT_NAME_VALUE": {
      const { name, value } = action.payload;
      console.log(value);
      return {
        ...state,
        selectname: "",
        checkname: "",
        selectdesc: "",
        [name]: value,
      };
    }
    case "SELECT_NAME_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        inputname: "",
        checkname: "",
        selectdesc: "",
        [name]: value,
      };
    }
    case "SELECT_DESC_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        inputname: "",
        checkname: "",
        selectname: "",
        [name]: value,
      };
    }
    case "FILTER_CHECK_VALUE": {
      let filterProduct = [...state.allProduct];
      console.log(state);
      let filterData = [];

      // If value is empty, restore the original product list
      if (state.checkname === "") {
        return {
          ...state,
          // restore to original product list
        };
      } else {
        // Filter products based on the value
        filterData = filterProduct.filter((curEle) => {
          return curEle.catname
            .toLowerCase()
            .includes(state.checkname.toLowerCase());
        });
      }

      // Return updated state with filtered products
      return {
        ...state,
        allProduct: filterData,
      };
    }
    case "FILTER_SELECT_NAME_VALUE": {
      let filterProduct = [...state.allProduct];
      console.log(state);
      let filterData = [];

      // If value is empty, restore the original product list
      if (state.selectname === "") {
        return {
          ...state,
          // restore to original product list
        };
      } else {
        // Filter products based on the value
        filterData = filterProduct.filter((curEle) => {
          return curEle.catname
            .toLowerCase()
            .includes(state.selectname.toLowerCase());
        });
      }

      // Return updated state with filtered products
      return {
        ...state,
        allProduct: filterData,
      };
    }
    case "FILTER_INPUT_VALUE": {
      let filterProduct = [...state.allProduct];
      console.log(state);
      let filterData = [];

      // If value is empty, restore the original product list
      if (state.inputname === "") {
        return {
          ...state,
          // restore to original product list
        };
      } else {
        // Filter products based on the value
        filterData = filterProduct.filter((curEle) => {
          return (
            curEle.title
              .toLowerCase()
              .includes(state.inputname.toLowerCase()) ||
            curEle.desc.toLowerCase().includes(state.inputname.toLowerCase())
          );
        });
      }

      // Return updated state with filtered products
      return {
        ...state,
        allProduct: filterData,
      };
    }
  case "HANDLE_CATEGORY_FILTER": {
  const original = [...state.allProductsBackup]; // ALWAYS from original
  const { value, check } = action.payload;

  console.log("checked:", check);
  console.log("original:", original);

  // UNCHECK → reset to original full list
  if (check === false) {
    return {
      ...state,
      allProducts: original
    };
  }

  // CHECKED → filter
  const filtered = original.filter(item => item.catname === value);

  return {
    ...state,
    allProducts: filtered
  };
}




    // SET_ALL_PRODUCT;
    default: {
      return {
        state,
      };
    }
  }
};
export default reducer;
