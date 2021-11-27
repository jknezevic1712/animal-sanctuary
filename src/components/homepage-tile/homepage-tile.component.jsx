import React from "react";

import "./homepage-tile.styles.scss";

import HomepagePicture from "../homepage-pictures/homepage-pictures.component";

const HomepageTile = ({ url, width, height, isTileRight, tileText }) => (
  <div className={`homepage-tile ${isTileRight ? "isTileRight" : ""}`}>
    <HomepagePicture url={url} width={width} height={height} />
    <div className="homepage-tile-text">
      <span>{tileText}</span>
    </div>
  </div>
);

export default HomepageTile;
