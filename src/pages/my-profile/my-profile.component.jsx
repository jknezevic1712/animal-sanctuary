import React from "react";

import "./my-profile.styles.scss";

import FormInput from "../../components/form-input/form-input.component";

const MyProfilePage = ({ currentUser }) => {
  const { email, displayName, id, createdAt } = currentUser;

  console.log(email, displayName, id, createdAt);

  return <h1>Welcome To Your Profile Page!</h1>;
};

export default MyProfilePage;
