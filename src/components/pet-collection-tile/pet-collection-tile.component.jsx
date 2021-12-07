import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./pet-collection-tile.styles.scss";

import { selectCollectionsForView } from "../../redux/pet-collection/pet-collection.selectors";
import CollectionItem from "../collection-item/collection-item.component";

const PetCollectionTile = ({ collections }) => (
  <div className="collection-container">
    {collections.map(({ id, ...otherCollectionsData }) => (
      <CollectionItem key={id} {...otherCollectionsData} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForView,
});

export default connect(mapStateToProps)(PetCollectionTile);
