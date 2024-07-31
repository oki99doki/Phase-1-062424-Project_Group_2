import React, { useEffect, useState } from "react";

function CityCard({
  destination,
  updateFavorite,
  deleteFavorite,
  showDeleteButton,
  hideFavoriteButton,
}) {
  const [favorite, setFavorite] = useState(destination.favorite);

  const toggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/places/${destination.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ favorite }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("patch failed");
        }
      })
      .then((data) => {
        updateFavorite(data);
      })
      .catch((err) => console.error("couldnt reach server"));
  }, [favorite]);

  const removeFromFavorites = () => {
    deleteFavorite(destination.id);
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
        <button onClick={removeFromFavorites}>Remove from Favorites</button>
      )}
    </li>
  );
}

export default CityCard;
