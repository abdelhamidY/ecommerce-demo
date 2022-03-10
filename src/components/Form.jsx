import "./form.scss";
import { useDispatch, connect } from "react-redux";
import { submitAction } from "../redux-state/actions";

const Form = props => {
  console.log(props);
  let submitSuccess = props.state.length === 0 ? "" : "hidden";
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.prevent.default();
    dispatch(submitAction());
  };
  setTimeout(() => {
    submitSuccess = "hidden";
  }, 50);
  return (
    <>
      <h1 className={submitSuccess} style={{ textAlign: "center" }}>
        submit successfully
      </h1>
      <form onSubmit={handleSubmit}>
        <h1>Fill Yor details</h1>
        <input type="text" placeholder="Address" required />
        <input
          type="tel"
          pattern="^01[0-2,5]{1}[0-9]{8}$"
          placeholder="01x xxxxxxx"
          required
        />
        <input type="email" placeholder="Email" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Form);
