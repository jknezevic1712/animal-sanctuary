import React from "react";

import "./volunteering.styles.scss";

const VolunteeringPage = () => {
  return (
    <div className="volunteering-container">
      <h1>Volunteer for us!</h1>
      <div className="volunteering-innerContainer">
        <div className="volunteering-section">
          <div className="volunteering-image">
            <img
              src="https://newsroom.ocfl.net/wp-content/uploads/2016/03/AnimalServicesVolunteer.jpg"
              alt="Volunteers with cats"
            />
          </div>
          <div className="volunteering-text-first">
            <h3>
              Check out ways of helping out lovely animals and us to assure
              resources for their living!
            </h3>
            <p>
              Volunteers are a huge part of what we do and they help a lot with
              preventin cruelty, promoting kindness and easing the suffering of
              animals.
            </p>
            <p>
              There are many ways through which you can make a difference so
              that anyone could find the way of helping they prefer!
            </p>
          </div>
        </div>
        <div className="volunteering-section">
          <div className="volunteering-image">
            <img
              src="https://www.aspca.org/sites/default/files/how-you-can-help_volunteer_adoption-center_main-image.jpg"
              alt="Volunteer with a puppy"
            />
          </div>
          <div className="volunteering-text">
            <h3>Benefits of Volunteering?</h3>
            <p>
              By volunteering you can gain an opportunity to meet like-minded
              people whose desire is to help out those in need. Other benefits
              of all this could be:
            </p>
            <ul>
              <li>
                Opportunity to expand your skillset or further develop existing
                one
              </li>
              <li>
                Trying out something new so you can see how does this "world"
                look like
              </li>
              <li>
                Volunteering is first of all useful, but it can also be very
                rewarding
              </li>
              <li>
                Whenever you help out an innocent soul, you feel like you've
                been awarded an achievement
              </li>
              <li>
                Excellent way to further develop confidence and personal skills
                which are extremely useful
              </li>
            </ul>
          </div>
        </div>
        <div className="volunteering-section">
          <div className="volunteering-image">
            <img
              src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/transport-dog-458193.jpg"
              alt="Volunteer with a dog"
            />
          </div>
          <div className="volunteering-text">
            <h3>Who can volunteer and how?</h3>
            <p>
              Anyone can volunteer, there is no age restriction or anything
              similar so literally anyone can become a contributor to animal
              welfare
            </p>
            <p>
              If you are interested in volunteering and wish to become a part of
              our community, feel free to check out your nearest{" "}
            </p>
          </div>
        </div>
        <div className="volunteering-text last-section">
          <h3>Time consumption</h3>
          <p>
            No matter how much time you have in spare, every deed you do will
            make a difference, which is the main point of all this.
          </p>
          <p>
            There are lots of ways how you can help out, some of which can take
            more or less of your available time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteeringPage;
