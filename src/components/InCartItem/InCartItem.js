import "./InCartItem.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Context(s)
import { StoreContext } from "../../context/StoreContextProvider";
//Function(s)
import { eachItemTotal, shorten } from "../../helper/functions";

const InCartItem = (props) => {
  const { id, title, image, price, quantity } = props;
  const { dispatch } = useContext(StoreContext);
  return (
    <div className="inCart-items-container">
      <div className="inCart-image-container">
        <img src={image} alt={title} />
      </div>

      <Link to={`/product/${id}`}>
        <h3 className="inCart-title">{shorten(title)}</h3>
      </Link>

      <h3>$ {price}</h3>

      <div className="inCart-quantityBtn">
        <button
          id={quantity === 1 && "disabledBtn"}
          onClick={() => {
            dispatch({ type: "DECREASE", payload: props });
          }}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <h3>{quantity}</h3>
        <button
          onClick={() => {
            dispatch({ type: "INCREASE", payload: props });
          }}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>

      <button
        className="inCart-removeBtn"
        onClick={() => {
          dispatch({ type: "REMOVE_ITEM", payload: props });
        }}
      >
        <i className="fas fa-trash-alt fa-2x"></i>
      </button>

      <h3>item total: ${eachItemTotal(price, quantity)}</h3>
    </div>
  );
};

export default InCartItem;
