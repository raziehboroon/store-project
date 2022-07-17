//paypal feature works with vpn
import "./PayPal.scss";
import React, { useContext, useEffect, useRef } from "react";
// Context(s)
// import { AppContext } from "../../context/Context";
import { StoreContext } from "../../context/StoreContextProvider";

const PayPal = () => {
  // const { total, clearCart } = useContext(AppContext);
  const { state, dispatch } = useContext(StoreContext);
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              { amount: { currency_code: "USD", value: state.total } },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("successfull purchase.");
          console.log(order);
          // clearCart();
          dispatch({ type: "CHECKOUT" });
          alert("Thank you for your purchase, see you soon.");
        },
        onError: (err) => {
          console.log("unsuccessful purchase" + err);
        },
      })
      .render(paypal.current);
  }, [dispatch, state]);
  // when dependecy array is removed, add one paypal button each time +/_ is pressed
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
