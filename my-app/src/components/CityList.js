import React from "react";
import CityCard from "./CityCard";

function CityList({ destinations, updateFavorite }) {
  return (
    <ul>
      {destinations.map((destination) => (
        <CityCard
          key={destination.id}
          destination={destination}
          updateFavorite={updateFavorite}
          showDeleteButton={false}
          hideFavoriteButton={false}
        />
      ))}
    </ul>
  );
}

export default CityList;
