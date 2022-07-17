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
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <span className="nav-link">
            <img
              src={shopLogo}
              alt="cactus logo"
              className="logo navbar-brand"
            />
            Store
          </span>
        </Link>
        {/* <ul className="navbar-nav ml-5 flex-grow-1"> */}
        {/* <li className="nav-item fw-bold nav-title"> */}
        {/* <Link to="/" 
          Store
        </Link> */}
        {/* </li> */}
        {/* </ul> */}
        <Link to="/Cart" className="ml-auto">
          <button
            id="btn-nav"
            className="btn fw-bold text-capitalize p-1 border border-3 rounded text-light"
          >
            <i className="fas fa-shopping-cart p-1"></i>
            my cart
            <span
              id="basket-index"
              className="d-flex align-items-center justify-content-center p-0"
            >
              {state.itemCount}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
