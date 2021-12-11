import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MyProfilePage from "./my-profile.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const MyProfileContainer = ({ currentUser }) => {
  // return currentUser.map((data) => (
  //   <FormInput key={id} {...otherPetsData} urlID={id} />
  // ));

  return <MyProfilePage currentUser={currentUser} />;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MyProfileContainer);
