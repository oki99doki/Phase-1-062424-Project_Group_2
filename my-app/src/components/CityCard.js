import React, { useEffect, useState } from "react";

function CityCard({
  destination,
  updateFavorite,
  deleteFromFavorites,
  deleteDestination,
  showDeleteButton,
  hideFavoriteButton,
  isFavoritePage,
}) {
  const [favorite, setFavorite] = useState(destination.favorite);

  const toggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/places/${destination.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Patch failed");
        }
      })
      .then((data) => {
        updateFavorite(data);
      })
      .catch((err) => console.error("Couldnt reach server", err));
  }, [favorite]);

  const handleRemoveFromFavorites = () => {
    fetch(`http://localhost:4000/places/${destination.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: false }),
    })
      .then((res) => {
        if (res.ok) {
          deleteFromFavorites(destination.id);
        } else {
          throw new Error("Remove from favorites failed");
        }
      })
      .catch((err) => console.error("Couldnt reach server", err));
  };

  const handleDeleteDestination = () => {
    fetch(`http://localhost:4000/places/${destination.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          deleteDestination(destination.id);
        } else {
          throw new Error("Delete failed");
        }
      })
      .catch((err) => console.error("Couldnt reach server", err));
  };

  return (
    <li>
      <img src={destination.image} alt={`${destination["city-name"]}`} />
      <h3>Country Name: {destination["country-name"]}</h3>
      <h4>City Name: {destination["city-name"]}</h4>
      {!hideFavoriteButton && (
        <button className="favorite" onClick={toggleFavorite}>
          {favorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      )}
      {showDeleteButton && (
        <>
          {isFavoritePage && (
            <button onClick={handleRemoveFromFavorites}>
              Remove from Fav List
            </button>
          )}
          <button onClick={handleDeleteDestination}>
            Delete Destination Permanently
          </button>
        </>
      )}
    </li>
  );
}

export default CityCard;
