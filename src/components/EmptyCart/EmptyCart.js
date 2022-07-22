import "./EmptyCart.scss";
import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="emptyCart-container section">
      <h2 className="page-title">your cart is empty</h2>
      <Link to="/">
        <button className="btn-dark">back to store</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
