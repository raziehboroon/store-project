import React from "react";
import "./Footer.scss";
// Function(s)
import { getDate } from "../../helper/functions";

const Footer = () => {
  return (
    <footer>
      <h3>&copy; {getDate()} Razieh Boroon. all rights reserved</h3>
    </footer>
  );
};

export default Footer;
