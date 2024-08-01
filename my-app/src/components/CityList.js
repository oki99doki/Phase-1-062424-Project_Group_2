import React from "react";
import CityCard from "./CityCard";

function CityList({
  destinations,
  updateFavorite,
  deleteDestination,
  deleteFromFavorites,
  showDeleteButton,
  hideFavoriteButton,
  isFavoritePage,
}) {
  return (
    <ul>
      {destinations.map((destination) => (
        <CityCard
          key={destination.id}
          destination={destination}
          updateFavorite={updateFavorite}
          deleteDestination={deleteDestination}
          deleteFromFavorites={deleteFromFavorites}
          showDeleteButton={showDeleteButton}
          hideFavoriteButton={hideFavoriteButton}
          isFavoritePage={isFavoritePage}
        />
      ))}
    </ul>
  );
}

export default CityList;
