import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container section d-flex flex-column align-items-center justify-content-center">
      <h2 className="plant-title text-center pt-2 mb-5">your cart is empty</h2>
      <Link to="/">
        <button className="btn fw-bolder text-capitalize mb-2" id="btn-home">
          back to store
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
