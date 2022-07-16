import React, { useContext } from "react";
import "./CartSummary.scss";
import { StoreContext } from "../../context/StoreContextProvider";
import { Link } from "react-router-dom";
import PayPal from "../PayPal/PayPal";
const CartSummary = () => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <div className="row justify-content-end py-3">
      <div className="col-12 col-sm-6 col-md-4 justify-content-end">
        <Link to="/">
          <button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            id="btn-cart"
            className="btn fw-bold py-1 px-4 my-1 mx-0 text-capitalize"
          >
            clear cart
          </button>
        </Link>
        <h5>
          <span className="plant-title">subtotaln :</span> $ {state.subtotal}
        </h5>
        <h5>
          <span className="plant-title">tax :</span> $ {state.tax}
        </h5>
        <h5>
          <span className="plant-title">total :</span> $ {state.total}
        </h5>
        <PayPal />
      </div>
    </div>
  );
};

export default CartSummary;
