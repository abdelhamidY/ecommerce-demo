import { actionTypes } from "../actiontypes";
// export const GetProducts = products => {
//   return { type: actionTypes.VIEW_PRODUCTS, payload: products };
// };

export const addCartAction = product => {
  return { type: actionTypes.ADD_CART, payload: { product, quantity: 1 } };
};

export const removeCartAction = id => {
  return { type: actionTypes.REMOVE_CART, payload: id };
};

export const increaseQtyAction = (quantity, id) => {
  return { type: actionTypes.INCREASE_QTY, payload: { quantity, id } };
};

export const decreaseQtyAction = (quantity, id) => {
  return { type: actionTypes.INCREASE_QTY, payload: { quantity, id } };
};

export const submitAction = () => {
  return { type: actionTypes.SUBMIT_ORDER };
};
