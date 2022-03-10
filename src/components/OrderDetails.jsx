import { Link } from "react-router-dom";
import "./orderDetails.scss";
import OrderItem from "./OrderItem";
import { connect } from "react-redux";
const OrderDetails = props => {
  console.log(props.state);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map(item => {
            return (
              <OrderItem
                key={item.id}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
              />
            );
          })}
        </tbody>
      </table>
      <div>
        <Link to="/fill-details" className="order-button">
          Order Now
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(OrderDetails);
