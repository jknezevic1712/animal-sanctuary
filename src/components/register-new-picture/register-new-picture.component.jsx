import React from "react";

import "./register-new-picture.styles.scss";

import Spinner from "../spinner/spinner.component";

const RegisterNewPicture = ({ url }) => {
  return (
    <div className="registerNew-picture">
      {url ? <img alt="Your pet" src={`${url}`} /> : <Spinner />}
    </div>
  );
};

export default RegisterNewPicture;
