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
          <div className="row justify-content-center my-auto">
            <div
              id="modal"
              className="col-5 text-center text-capitalize p-3 rounded"
            >
              <h5 className="fw-bold">item added to the cart</h5>
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid mb-2"
              />
              <h5 className="fw-bold">{product.title}</h5>
              <Link to="/">
                <button
                  onClick={() =>
                    dispatch({ type: "CLOSE_MODAL", payload: state })
                  }
                  className="btn fw-bolder text-capitalize mb-2"
                  id="btn-home"
                >
                  back to store
                </button>
              </Link>
              <Link to="/Cart">
                <button
                  onClick={() =>
                    dispatch({ type: "CLOSE_MODAL", payload: state })
                  }
                  className="btn fw-bolder text-capitalize mb-2"
                  id="btn-cart"
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
