import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import "./register-new.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import FormInputDate from "../../components/form-input/form-input-date.component";
import RegisterNewPicture from "../../components/register-new-picture/register-new-picture.component";

import { registerNewStartAsync } from "../../redux/register-new/register-new.actions";
import { selectIsUploadingData } from "../../redux/register-new/register-new.selectors";

const RegisterNew = ({ registerNewStartAsync }) => {
  const [petInformation, setPetInformation] = useState({
    ownerName: "",
    ownerAddress: "",
    url: "",
    petName: "",
    breed: "",
    defDateOfBirth: "",
    vaccinated: false,
  });

  const {
    url,
    petName,
    breed,
    defDateOfBirth,
    vaccinated,
    ownerName,
    ownerAddress,
  } = petInformation;

  const initialState = {
    ownerName: "",
    ownerAddress: "",
    url: "",
    petName: "",
    breed: "",
    defDateOfBirth: "",
    vaccinated: false,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdAt = moment().format("MM/DD/YYYY");
    const dateOfBirth = moment(defDateOfBirth).format("MM/DD/YYYY");

    const registerNewPetData = {
      createdAt,
      dateOfBirth,
      url,
      petName,
      breed,
      vaccinated,
      ownerName,
      ownerAddress,
    };

    if (petName === "" && breed === "") {
      alert("Please enter required information!");
      return;
    }

    registerNewStartAsync(registerNewPetData);
    setPetInformation(initialState);
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setPetInformation({ ...petInformation, [name]: value });
  };

  return (
    <div className="registerNew">
      <h3>Let us keep your friend safe and happy!</h3>
      <div className="registerNew-container">
        <RegisterNewPicture url={url} />
        <form className="form-input-container" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="ownerName"
            value={ownerName}
            onChange={handleChange}
            label="Owner name"
          />
          <FormInput
            type="text"
            name="ownerAddress"
            value={ownerAddress}
            onChange={handleChange}
            label="Address"
          />
          <hr />
          <FormInput
            type="text"
            name="petName"
            value={petName}
            onChange={handleChange}
            label="Pet's name"
            required
          />
          <FormInput
            type="text"
            name="breed"
            value={breed}
            onChange={handleChange}
            label="Breed"
            required
          />
          <FormInput
            type="text"
            name="url"
            value={url}
            onChange={handleChange}
            label="Pet's photo url"
          />
          <FormInputDate
            name="defDateOfBirth"
            value={defDateOfBirth}
            onChange={handleChange}
            label="Pet's date of birth"
          />
          <FormInput
            type="checkbox"
            name="vaccinated"
            value={vaccinated}
            onChange={handleChange}
            label="Pet vaccinated?"
            ischeckboxfield="true"
          />
          <CustomButton type="submit">SUBMIT</CustomButton>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isUploadingData: selectIsUploadingData,
});

const mapDispatchToProps = (dispatch) => ({
  registerNewStartAsync: (registerNewData) =>
    dispatch(registerNewStartAsync(registerNewData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterNew);
