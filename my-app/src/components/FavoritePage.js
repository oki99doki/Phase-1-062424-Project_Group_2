import React, { useEffect, useState } from "react";
import CityCard from "./CityCard";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/places")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to fetch favorites");
        }
      })
      .then((data) => {
        const favoritePlaces = data.filter((place) => place.favorite);
        setFavorites(favoritePlaces);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const updateFavorite = (updatedPlace) => {
    setFavorites((prevFavorites) =>
      prevFavorites.map((place) =>
        place.id === updatedPlace.id ? updatedPlace : place
      )
    );
  };

  const deleteFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((place) => place.id !== id)
    );
  };

  const deleteDestination = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((place) => place.id !== id)
    );
  };

  return (
    <div>
      <h1>Favorite Destinations</h1>
      <ul>
        {favorites.length === 0 ? (
          <p>No favorite places added yet.</p>
        ) : (
          favorites.map((place) => (
            <CityCard
              key={place.id}
              destination={place}
              updateFavorite={updateFavorite}
              deleteFromFavorites={deleteFromFavorites}
              deleteDestination={deleteDestination}
              showDeleteButton={true}
              hideFavoriteButton={true}
              isFavoritePage={true}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default FavoritePage;
