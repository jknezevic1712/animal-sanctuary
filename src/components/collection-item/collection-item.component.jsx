import React from "react";
import { useHistory } from "react-router-dom";

import "./collection-item.styles.scss";

const CollectionItem = ({ petName, breed, url, ownerAddress, urlID }) => {
  const history = useHistory();

  return (
    <div
      className="collection-item-container"
      onClick={() => history.push(`${history.location.pathname}/${urlID}`)}
    >
      <div
        className="collection-item-bg"
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="collection-item-content">
        <h1 className="collection-item-title">{petName.toUpperCase()}</h1>
        <span className="collection-item-subtitle">{breed}</span>
        <span className="collection-item-subtitle">{ownerAddress}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
