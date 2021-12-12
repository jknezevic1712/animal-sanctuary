import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import Logo from "./animal-sanctuary-logo.png";
import SignIn from "./sign-in.png";
import SignOut from "./sign-out.png";
import MyProfile from "./my-profile.png";
import Volunteering from "./volunteering.png";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, signOutStart }) => (
  <div className="header-container">
    <div className="header-logo-container">
      <Link to="/">
        <img src={Logo} alt="Animal Sanctuary Logo" className="header-logo" />
      </Link>
    </div>
    <div className={`header-title ${currentUser ? "header-title-margin" : ""}`}>
      <span>Animal Sanctuary</span>
    </div>
    <div className="header-options">
      {currentUser ? (
        <>
          <Link to="/volunteering">
            <img
              src={Volunteering}
              alt="Volunteering"
              className="header-option"
            />
          </Link>
          <Link to="/my-profile">
            <img src={MyProfile} alt="My profile" className="header-option" />
          </Link>
          <Link to="/" onClick={signOutStart}>
            <img src={SignOut} alt="Sign out" className="header-option" />
          </Link>
        </>
      ) : (
        <Link to="/authentication">
          <img src={SignIn} alt="Sign in" className="header-option" />
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
