import "./Plant.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { StoreContext } from "../../context/StoreContextProvider";
import basketIcon from "../../assets/icons/shop.svg";
// import PropTypes from "prop-types";
import { shorten, isInCart } from "../../helper/functions";

const Plant = (props) => {
  // const { addItemToCart, setShowModal, setModalID } = useContext(AppContext);
  const { id, title, image, price } = props;
  const { setShowModal, setModalID } = useContext(AppContext);
  const { state, dispatch } = useContext(StoreContext);

  return (
    <article id="card" className="col-5 col-sm-3 m-2 m-sm-3 p-0">
      <div id="image-container">
        <Link to={`/plant/${id}`}>
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
            setShowModal(true);
            setModalID(props.id);
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

export default Plant;

// Plant.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   inCart: PropTypes.bool.isRequired,
// sciName: PropTypes.string.isRequired,
// family: PropTypes.string.isRequired,
// species: PropTypes.string.isRequired,
// info: PropTypes.string.isRequired,
// count: PropTypes.number.isRequired,
// total: PropTypes.number.isRequired,
// };
