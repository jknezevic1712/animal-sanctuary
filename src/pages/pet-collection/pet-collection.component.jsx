import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./pet-collection.styles.scss";

import { setSearchField } from "../../redux/search-bar/search-bar.actions";

import PetCollectionTile from "../../components/pet-collection-tile/pet-collection-tile.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import { selectSearchField } from "../../redux/search-bar/search-bar.selectors";

const PetCollectionPage = ({
  match,
  onSearchChange,
  collections,
  searchField,
}) => {
  const filteredPets = collections.filter((pet) => {
    return pet.petName.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <SearchBar searchChange={onSearchChange} />
      <div className="pet-collection-container">
        <Route exact path={`${match.path}`}>
          <PetCollectionTile filteredPets={filteredPets} />
        </Route>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  searchField: selectSearchField,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetCollectionPage);
