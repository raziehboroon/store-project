import "./Product.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Context(s)
import { StoreContext } from "../../context/StoreContextProvider";
// Component(s)
import basketIcon from "../../assets/icons/shop.svg";
// Function(s)
import { shorten, isInCart } from "../../helper/functions";

const Product = (props) => {
  const { id, title, image, price } = props;
  const { state, dispatch } = useContext(StoreContext);

  return (
    <article id="card" className="col-5 col-sm-3 m-2 m-sm-3 p-0">
      <div id="image-container">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="card-img-top img-fluid w-100 h-100"
          />
        </Link>
        <button
          onClick={() => {
            // addItemToCart(id);
            dispatch({ type: "ADD_ITEM", payload: props });
          }}
          id="btn-basket"
          className="p-2 border-0 fw-bold"
        >
          {isInCart(state.selectedItems, id) ? (
            " in Cart "
          ) : (
            <img src={basketIcon} alt="basket icon" />
          )}
          {/* {inCart ? " in Cart " : <i className="fas fa-shopping-cart"></i>} */}
        </button>
      </div>
      <div className="card-body">
        <div className="column flex-column flex-sm-row align-items-center justify-content-between ">
          <h5 className="card-title text-capitalize col-12 p-0 fw-bold text-secondary">
            {shorten(title)}
          </h5>
          <h5 className="card-title text-secondary col-12 p-0 text-end fw-bold">
            $ {price}
          </h5>
        </div>
      </div>
    </article>
  );
};

export default Product;

Product.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.object.isRequired,
  }),
};
