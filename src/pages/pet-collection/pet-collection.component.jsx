import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./pet-collection.styles.scss";

import { fetchCollectionsStart } from "../../redux/pet-collection/pet-collection.actions";

import PetCollectionTile from "../../components/pet-collection-tile/pet-collection-tile.component";

const PetCollectionPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="pet-collection-container">
      <Route exact path={`${match.path}`} component={PetCollectionTile} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(PetCollectionPage);
