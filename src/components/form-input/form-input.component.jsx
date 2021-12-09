import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div
    className={`group  ${otherProps.ischeckboxfield ? "checkboxstyle" : ""}`}
  >
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} ${
          otherProps.shrinked ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
