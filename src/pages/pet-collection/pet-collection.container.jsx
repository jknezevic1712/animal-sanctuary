import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./pet-collection.styles.scss";

import PetCollectionPage from "./pet-collection.component";

import { fetchCollectionsStart } from "../../redux/pet-collection/pet-collection.actions";

import { selectCollectionsForView } from "../../redux/pet-collection/pet-collection.selectors";

const PetCollectionContainer = ({
  fetchCollectionsStart,
  match,
  collections,
}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return <PetCollectionPage match={match} collections={collections} />;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForView,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetCollectionContainer);
