import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.scss";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";
import CartMenu from "./CartMenu";
const Nav = props => {
  console.log(props);
  const [activate, setActivate] = useState(false);
  const active = props.state.length > 0 ? "" : "hidden";
  const showCart = activate ? "" : "hidden";
  const handleCart = () => {
    setActivate(!activate);
  };

  return (
    <>
      <nav>
        <div className="left">
          <h1>E-commerce</h1>
          <ul>
            <li>
              <Link className="anchor-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <img onClick={handleCart} className="cart" src={cart} alt="cart" />
          <span className={active}>{props.state.length}</span>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={`main-cart ${showCart}`}>
          <h4>Cart</h4>
          <hr />
          <div className="content">
            <CartMenu handleCart={handleCart} state={props.state} />
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(Nav);
