import React from "react";
import { useHistory } from "react-router-dom";

import "./homepage.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import HomepageTile from "../../components/homepage-tile/homepage-tile.component";
import homepage_1 from "../../assets/homepage_1.jpg";
import homepage_2 from "../../assets/homepage_2.jpg";
import homepage_3 from "../../assets/homepage_3.jpg";
import homepage_4 from "../../assets/homepage_4.jpg";

const tileText1 =
  "“Until one has loved an animal, a part of one’s soul remains unawakened.” – Anatole France";
const tileText2 =
  "“Animals are such agreeable friends—they ask no questions; they pass no criticisms.” – George Eliot";
const tileText3 =
  "“Dogs are our link to paradise. They don’t know evil or jealousy or discontent.” – Milan Kundera";
const tileText4 =
  "“A kitten is the delight of a household. All day long a comedy is played out by an incomparable actor.” – Champfleury";

const Homepage = () => {
  const history = useHistory();

  return (
    <div className="homepage-container">
      <div className="homepage-text">
        <h3>
          Designed with purpose of helping out our good and loyal friends find
          their home!
        </h3>
        <div className="homepage-buttons">
          <CustomButton
            onClick={() => {
              history.push("/register-new");
            }}
          >
            Take care of your friend
          </CustomButton>
          <CustomButton
            onClick={() => {
              history.push("/");
            }}
          >
            Find your new friend
          </CustomButton>
        </div>
      </div>
      <HomepageTile
        url={homepage_1}
        width="500"
        height="400"
        tileText={tileText1}
      />
      <HomepageTile
        url={homepage_2}
        width="500"
        height="400"
        tileText={tileText2}
        isTileRight
      />
      <HomepageTile
        url={homepage_3}
        width="500"
        height="400"
        tileText={tileText3}
      />
      <HomepageTile
        url={homepage_4}
        width="500"
        height="400"
        tileText={tileText4}
        isTileRight
      />
    </div>
  );
};

export default Homepage;
