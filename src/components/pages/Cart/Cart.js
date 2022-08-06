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
    <main>
      {state.selectedItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="section">
          <h2 className="page-title">your cart</h2>
          {/* cart column header */}

          {/* cart column items data */}
          {state.selectedItems.map((item) => (
            <InCartItem key={item.id} {...item} />
          ))}
          {/* cart summary and summation */}
          <PaymentSummary />
        </div>
      )}
      ;
    </main>
  );
};

export default Cart;
