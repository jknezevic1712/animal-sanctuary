import React from "react";

import "./header.styles.scss";
import Logo from "./animal-sanctuary-logo.png";

const Header = () => (
  <div className="header-container">
    <div className="header-logo">
      <img src={Logo} alt="Animal Sanctuary Logo" className="header-logo" />
    </div>
    <div className="header-title">
      <span>Animal Sanctuary</span>
    </div>
  </div>
);

export default Header;
