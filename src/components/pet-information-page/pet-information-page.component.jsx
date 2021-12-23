import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./pet-information-page.styles.scss";

import { selectCollectionDetails } from "../../redux/pet-collection/pet-collection.selectors";
import FormInput from "../form-input/form-input.component";
import RegisterNewPicture from "../register-new-picture/register-new-picture.component";
import CustomButton from "../custom-button/custom-button.component";
import {infoNotification} from "../alertify-popup/alertify-popup.component";

const PetInformationPage = () => {
  const { urlID } = useParams();
  const collectionDetails = useSelector(selectCollectionDetails(urlID));

  const {
    breed,
    createdAt,
    dateOfBirth,
    ownerAddress,
    ownerName,
    petName,
    url,
    vaccinated,
    visitHours
  } = collectionDetails;

  const vaccinatedInfo = () => {
    if (vaccinated === true) {
      return "Yes";
    } else {
      return "No";
    }
  };

  const visitingHours = () => {

    return infoNotification(visitHours);
  }

  return (
    <div className="pet-information-page-container">
      <h3>{petName} Details</h3>
      <span>Added on {`${createdAt}`}</span>
      <div className="pet-information-page-innerContainer">
        <RegisterNewPicture url={url} />
        <form className="form-input-container">
          <FormInput
            type="text"
            name="ownerName"
            value={ownerName}
            label="Owner name"
            readOnly
          />
          <FormInput
            type="text"
            name="ownerAddress"
            value={ownerAddress}
            label="Address"
            readOnly
          />
          <hr />
          <FormInput
            type="text"
            name="petName"
            value={petName}
            label="Pet's name"
            readOnly
          />
          <FormInput
            type="text"
            name="breed"
            value={breed}
            label="Breed"
            readOnly
          />
          <FormInput
            type="text"
            name="url"
            value={url}
            label="Pet's photo url"
            readOnly
          />
          <FormInput
            type="text"
            name="dateOfBirth"
            value={dateOfBirth}
            label="Pet's date of birth"
            readOnly
            shrinked="true"
          />
          <FormInput
            type="text"
            name="vaccinated"
            value={vaccinatedInfo()}
            label="Pet vaccinated?"
            readOnly
            shrinked="true"
          />
          <CustomButton type="button" onClick={() => visitingHours()}>Visit hours</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default PetInformationPage;
