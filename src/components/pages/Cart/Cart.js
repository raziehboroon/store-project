import "./Cart.scss";
import React, { useContext } from "react";
// Context(s)
import { StoreContext } from "../../../context/StoreContextProvider";
// Component(s)
import PaymentSummary from "../../PaymentSummary/PaymentSummary";
import InCartItem from "../../InCartItem/InCartItem";
import EmptyCart from "../../EmptyCart/EmptyCart";

const Cart = () => {
  const { state } = useContext(StoreContext);

  return (
    <>
      {state.selectedItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="section">
          <h2 className="page-title">your cart</h2>
          {/* cart column header */}
          <div
            className="header-container"
            // className="row m-2 text-uppercase fw-bold text-center"
          >
            <h2>Products</h2>
            <h2>name</h2>
            <h2>Price</h2>
            <h2>quantity</h2>
            <h2>remove</h2>
            <h2>total</h2>
          </div>
          <div className="inCart-divider-line"></div>
          {/* cart column items data */}
          {state.selectedItems.map((item) => (
            <InCartItem key={item.id} {...item} />
          ))}
          {/* cart summary and summation */}
          <PaymentSummary />
        </div>
      )}
      ;
    </>
  );
};

export default Cart;
