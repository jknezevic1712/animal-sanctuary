import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import Logo from "./animal-sanctuary-logo.png";

const Header = () => (
  <div className="header-container">
    <div className="header-logo">
      <Link to="/">
        <img src={Logo} alt="Animal Sanctuary Logo" className="header-logo" />
      </Link>
    </div>
    <div className="header-title">
      <span>Animal Sanctuary</span>
    </div>
  </div>
);

export default Header;
