import { actionTypes } from "../actiontypes";
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      const cartItems = [...state, action.payload.product];
      const newArrayForCart = cartItems.map(item => ({
        ...item,
        quantity: action.payload.quantity,
      }));
      return newArrayForCart;
    case actionTypes.REMOVE_CART:
      return state.filter(state => state.id !== action.payload);
    case actionTypes.INCREASE_QTY || actionTypes.DECREASE_QTY:
      const newArray = state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : { ...item }
      );
      return newArray;
    case actionTypes.SUBMIT_ORDER:
      return [];
    default:
      return state;
  }
};
