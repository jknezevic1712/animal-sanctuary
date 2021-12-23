import React from "react";

import "./register-new-picture.styles.scss";

const RegisterNewPicture = ({ url }) => {
  return (
    <div className="registerNew-picture">
      {url ? (
        <img alt="Your pet" src={`${url}`} />
      ) : (
        <div>
          <span>Insert image url</span>
        </div>
      )}
    </div>
  );
};

export default RegisterNewPicture;
