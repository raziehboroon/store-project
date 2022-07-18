//www.flaticon.com/free-icon/cactus_4842199
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

import "./Navbar.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Icon(s)
import shopLogo from "../../assets/icons/shopLogo.jpg";
// Context(s)
import { StoreContext } from "../../context/StoreContextProvider";

const Navbar = () => {
  const { state } = useContext(StoreContext);
  return (
    <nav>
      <div className="container">
        <Link to="/" id="nav-title-container">
          <img src={shopLogo} alt="store logo" />
          <span>Store</span>
        </Link>

        <Link to="/Cart">
          <button id="btn-nav">
            <i className="fas fa-shopping-cart"></i>
            my cart
            <span id="basket-index">{state.itemCount}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
