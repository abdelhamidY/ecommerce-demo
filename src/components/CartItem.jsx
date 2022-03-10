import { Fragment, useState } from "react";
import {
  increaseQtyAction,
  removeCartAction,
  decreaseQtyAction,
} from "../redux-state/actions";
import { useDispatch } from "react-redux";
import deleteImage from "../assets/icon-delete.svg";
import plusIcon from "../assets/icon-plus.svg";
import deleteIcon from "../assets/icon-minus.svg";
const CartItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handlePlus = (quantity, id) => {
    setCount(count + 1);
    dispatch(increaseQtyAction(quantity, id));
  };
  const handleMinus = (quantity, id) => {
    if (count <= 1) return;
    setCount(count - 1);
    dispatch(decreaseQtyAction(quantity, id));
  };
  return (
    <Fragment key={item.id}>
      <div className="cart-content">
        <img className="cart-image" src={item.image} alt="" />
        <h4 className="cart-details">
          {item.title} <br />
          {/* <span>{`$${item.price * 1}`}.00</span> */}
          <span> {`x ${count}`}</span>
        </h4>
        <div className="cart-options">
          <img
            onClick={() => {
              dispatch(removeCartAction(item.id));
            }}
            className="delete-image"
            src={deleteImage}
            alt=""
          />
          <img
            onClick={() => {
              handleMinus(count - 1, item.id);
            }}
            className="minus"
            src={deleteIcon}
            alt=""
          />
          <img
            onClick={() => {
              handlePlus(count + 1, item.id);
            }}
            className="plus"
            src={plusIcon}
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
