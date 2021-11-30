import React, { useState, useEffect } from "react";

import "./form-input.styles.scss";

const FormInputDate = ({ handleChange, label, ...otherProps }) => {
  const [initialState, setInitialState] = useState("text");

  useEffect(() => {}, [initialState]);

  const onFocus = () => setInitialState("date");

  const onBlur = () => setInitialState("text");

  return (
    <div className="group">
      <input
        type={initialState}
        onFocus={onFocus}
        onBlur={onBlur}
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInputDate;
