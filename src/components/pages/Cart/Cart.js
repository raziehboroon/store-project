import React, { useContext } from "react";
import "./Cart.scss";
import CartSummary from "../../CartSummary/CartSummary";
import InCartItem from "../../InCartItem/InCartItem";
import EmptyCart from "../../EmptyCart/EmptyCart";
import { StoreContext } from "../../../context/StoreContextProvider";

const Cart = () => {
  const { state } = useContext(StoreContext);

  // in case of empty cart
  // const inCartItem = data.filter((item) => console.log(item.inCart));
  // const inCartItem = data.filter((item) => item.inCart);
  // console.log(inCartItem);
  return (
    <>
      {state.selectedItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="container section">
          <h2 className="plant-title text-center pt-2 mb-3">your cart</h2>
          {/* cart column header */}
          <div
            id="inCart__header-container"
            className="row m-2 text-uppercase fw-bold text-center"
          >
            <h6 className="col-2 fw-bold">Products</h6>
            <h6 className="col-2 fw-bold">name</h6>
            <h6 className="col-2 fw-bold">Price</h6>
            <h6 className="col-2 fw-bold">quantity</h6>
            <h6 className="col-2 fw-bold">remove</h6>
            <h6 className="col-2 fw-bold">total</h6>
          </div>
          <div
            id="inCart__header-line"
            className="row w-100 border line-divider"
          ></div>
          {/* cart column items data */}
          {state.selectedItems.map((item) => (
            <InCartItem key={item.id} {...item} />
          ))}
          {/* cart summary and summation */}
          <CartSummary />
        </div>
      )}
      ;
    </>
  );
};

export default Cart;
