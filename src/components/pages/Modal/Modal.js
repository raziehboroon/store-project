import "./Modal.scss";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// Context(s)
import { StoreContext } from "../../../context/StoreContextProvider";
// function(s)
import { getSingleProduct } from "../../../helper/functions";

const Modal = () => {
  const { state, dispatch } = useContext(StoreContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getSingleProduct(state.selectedItems, state.modalID));
  }, [state]);

  // if (!state.showModal) {
  //   return null;
  // }
  return (
    <>
      {product && (
        <div className="modal-container">
          <div className="modal">
            <h3>item added to the cart</h3>
            <div className="modal-image-container">
              <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <div>
              <Link to="/">
                <button
                  className="btn-dark"
                  onClick={() =>
                    dispatch({ type: "CLOSE_MODAL", payload: state })
                  }
                >
                  back to store
                </button>
              </Link>
              <Link to="/Cart">
                <button
                  className="btn-light"
                  onClick={() =>
                    dispatch({ type: "CLOSE_MODAL", payload: state })
                  }
                >
                  to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
