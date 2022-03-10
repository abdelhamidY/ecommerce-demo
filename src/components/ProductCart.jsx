import { useDispatch } from "react-redux";
import { addCartAction } from "../redux-state/actions";
const ProductCart = ({ product, activate, index, handleCard }) => {
  const dispatch = useDispatch();
  return (
    <div key={product.id} className="card">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body" onClick={() => handleCard(index)}>
        <h5 className="card-title">{product.title}</h5>
        <span className="category">{product.category}</span>
        <div className={activate}>{product.description}</div>
        <p className="card-text">
          <b>{`${product.price}`}</b> EGP
        </p>
        <button
          onClick={() => {
            dispatch(addCartAction(product));
          }}
          className="btn btn-info"
        >
          Add cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
