import "./PaymentSummary.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// context(s)
import { StoreContext } from "../../context/StoreContextProvider";

const PaymentSummary = () => {
  const { state, dispatch } = useContext(StoreContext);
  // let history = useHistory();

  return (
    <div className="payment-container">
      <div className="payment">
        <h4>
          <span className="payment-title">subtotaln :</span> $ {state.subtotal}
        </h4>
        <h4>
          <span className="payment-title">tax :</span> $ {state.tax}
        </h4>
        <h4>
          <span className="payment-title">total :</span> $ {state.total}
        </h4>

        <button
          className="btn-dark"
          // onClick={() => {
          //   console.log(history);
          //   history.replace("/checkout");
          // }}
        >
          <Link to="/checkout">checkout</Link>
        </button>

        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="btn-light"
        >
          clear cart
        </button>
      </div>
    </div>
  );
};

export default PaymentSummary;
