import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./my-profile.styles.scss";
import VolunteerBadgePositive from "../../assets/volunteer-badge-positive.png";
import VolunteerBadgeNegative from "../../assets/volunteer-badge-negative.png";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import RegisterNewPicture from "../../components/register-new-picture/register-new-picture.component";

import { profileUpdateStartAsync } from "../../redux/profile/profile.actions";
import { checkUserSession } from "../../redux/user/user.actions";

const MyProfilePage = ({
  currentUser,
  profileUpdateStartAsync,
  checkUserSession,
}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const userAddress = () => {
    if (currentUser.address === undefined) {
      return "Not yet added";
    } else {
      return currentUser.address;
    }
  };

  const userProfileImage = () => {
    if (currentUser.userProfileUrl === undefined) {
      return "";
    } else {
      return currentUser.userProfileUrl;
    }
  };

  const [profileData, setProfileData] = useState({
    email: currentUser.email,
    displayName: currentUser.displayName,
    createdAt: currentUser.createdAt,
    userProfileUrl: userProfileImage(),
    id: currentUser.id,
    address: userAddress(),
    volunteer: currentUser.volunteer,
  });

  const {
    email,
    displayName,
    id,
    createdAt,
    address,
    userProfileUrl,
    volunteer,
  } = profileData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileUpdateData = {
      email,
      displayName,
      id,
      createdAt,
      userProfileUrl,
      address,
      volunteer,
    };

    profileUpdateStartAsync(id, profileUpdateData);
    checkUserSession();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="profile-page-container">
      <div className="profile-header">
        {currentUser.volunteer ? (
          <img src={VolunteerBadgePositive} alt="Not yet a volunteer badge" />
        ) : (
          <img src={VolunteerBadgeNegative} alt="Volunteer badge" />
        )}

        <h3>Profile Details</h3>
      </div>
      <span>Created on {`${createdAt}`}</span>
      <div className="profile-page-innerContainer">
        <RegisterNewPicture url={userProfileUrl} />
        <form className="form-input-container" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="User name"
            required
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            label="E-mail"
            onChange={handleChange}
            required
          />
          <FormInput
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            label="User address"
            required
          />
          <FormInput
            type="text"
            name="userProfileUrl"
            value={userProfileUrl}
            onChange={handleChange}
            label="Profile image url"
          />
          <CustomButton type="submit">Update</CustomButton>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  profileUpdateStartAsync: (id, profileUpdateData) =>
    dispatch(profileUpdateStartAsync(id, profileUpdateData)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(MyProfilePage);
