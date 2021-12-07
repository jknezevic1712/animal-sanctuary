import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ petName, breed, url, ownerAddress }) => (
  <div className="collection-item-container">
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

export default CollectionItem;
