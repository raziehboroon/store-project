//paypal feature works with vpn
import "./PayPal.scss";
import React, { useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
// Context(s)
import { StoreContext } from "../../context/StoreContextProvider";

const PayPal = () => {
  const { state, dispatch } = useContext(StoreContext);
  const paypal = useRef();
  let history = useHistory();
  //prevent back btn default behavior
  useEffect(() => {
    return history.listen(() => {
      // listen
      if (history.action === "POP") {
        history.replace("/checkout");
      }
    });
  }, [history]);

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
          // alert("Thank you for your purchase, see you soon.");
          console.log("Thank you for your purchase, see you soon.");
          dispatch({ type: "CHECKOUT" });
          history.replace("/emptycart");
          // history.push("/emptycart");
        },
        onError: (err) => {
          console.log("unsuccessful purchase" + err);
        },
      })
      .render(paypal.current);
  }, [dispatch, state, history]);
  // when dependecy array is removed, add one paypal button each time +/_ is pressed
  return (
    <div className="checkout-container section">
      <div ref={paypal}></div>

      {/* {status && <Redirect to="/" />} */}
    </div>
  );
};

export default PayPal;
