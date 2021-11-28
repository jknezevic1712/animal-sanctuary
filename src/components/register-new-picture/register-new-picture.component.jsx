import React from "react";

import "./register-new-picture.styles.scss";

const RegisterNewPicture = ({ url }) => {
  return (
    <div className="registerNew-picture">
      <img alt="PET PICTURE" src={`${url}`} />
    </div>
  );
};

export default RegisterNewPicture;
