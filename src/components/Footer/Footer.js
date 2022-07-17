import React from "react";
import "./Footer.scss";
// function(s)
import { getDate } from "../../helper/functions";

const Footer = () => {
  return (
    <footer>
      <div className="container container-lg d-flex justify-content-center text-capitalize align-items-center h-100 text-white font-weight-light text-center">
        <p className="m-1">
          &copy; {getDate()} Razieh Boroon. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
