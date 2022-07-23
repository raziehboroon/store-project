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
        <h2 className="inCart-title">{shorten(title)}</h2>
      </Link>

      <h2>Price: {price}$</h2>

      <div className="quantityBtn">
        <button
          id={quantity === 1 && "disabledBtn"}
          onClick={() => {
            dispatch({ type: "DECREASE", payload: props });
          }}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <h2>{quantity}</h2>
        <button
          onClick={() => {
            dispatch({ type: "INCREASE", payload: props });
          }}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>

      <button
        className="removeBtn"
        onClick={() => {
          dispatch({ type: "REMOVE_ITEM", payload: props });
        }}
      >
        <i className="fas fa-trash-alt"></i>
      </button>

      <h2>item total: ${eachItemTotal(price, quantity)}</h2>
    </div>
  );
};

export default InCartItem;
