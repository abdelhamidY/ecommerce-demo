import "./CartMenu.scss";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const CartMenu = props => {
  console.log(props.state);

  if (props.state.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Your cart is empty</span>
      </div>
    );
  } else {
    return (
      <>
        <div className="top">
          {props.state.map(item => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <div className="bottom">
          <Link
            onClick={props.handleCart}
            className="order-button"
            to={"/order-details"}
          >
            Review Order
          </Link>
        </div>
      </>
    );
  }
};

export default CartMenu;
