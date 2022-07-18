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
    <article className="card">
      {/* card image */}
      <div className="image-container">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <button
          id="btn-basket"
          onClick={() => {
            dispatch({ type: "ADD_ITEM", payload: props });
          }}
        >
          {isInCart(state.selectedItems, id) ? (
            " in Cart "
          ) : (
            <img src={basketIcon} alt="basket icon" />
          )}
        </button>
      </div>
      {/* card footer */}
      <div className="card-body">
        <h5 className="title">{shorten(title)}</h5>
        <h5 className="price">{price} $</h5>
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
