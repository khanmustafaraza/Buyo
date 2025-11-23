const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    case "REMOVE_CART_ITEM":
      const { id } = action.payload;
      // console.log(id);
      let filterCartItem = state.cartItem.filter((curEle) => {
        return curEle.single._id != id;
      });
      return {
        ...state,
        cartItem: filterCartItem,
      };
    default:
      return {
        state,
      };
  }
};
export default reducer;
