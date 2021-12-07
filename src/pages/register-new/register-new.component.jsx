import React, { useState } from "react";
import { connect } from "react-redux";

import "./register-new.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import FormInputDate from "../../components/form-input/form-input-date.component";
import RegisterNewPicture from "../../components/register-new-picture/register-new-picture.component";

import { registerNewStart } from "../../redux/register-new/register-new.actions";

const RegisterNew = ({ registerNewStart }) => {
  const [petInformation, setPetInformation] = useState({
    ownerName: "",
    ownerAddress: "",
    emptyUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
    url: "",
    petName: "",
    breed: "",
    dateOfBirth: "",
    vaccinated: false,
  });

  const {
    emptyUrl,
    url,
    petName,
    breed,
    dateOfBirth,
    vaccinated,
    ownerName,
    ownerAddress,
  } = petInformation;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdAt = new Date();

    if (petName === "" && breed === "") {
      alert("Please enter required information!");
      return;
    }

    // alert("Your friend's information has been received!");
    // console.log(petInformation);
    registerNewStart({
      url,
      petName,
      breed,
      dateOfBirth,
      vaccinated,
      ownerName,
      ownerAddress,
      createdAt,
    });
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
        <RegisterNewPicture url={url ? url : emptyUrl} />
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
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            label="Pet's date of birth"
          />
          <FormInput
            type="checkbox"
            name="vaccinated"
            value={vaccinated}
            onChange={handleChange}
            label="Pet vaccinated?"
          />
          <CustomButton type="submit">SUBMIT</CustomButton>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerNewStart: (registerNewData) =>
    dispatch(registerNewStart(registerNewData)),
});

export default connect(null, mapDispatchToProps)(RegisterNew);
