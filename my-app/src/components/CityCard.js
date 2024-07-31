import React, { useEffect, useState } from "react";

function CityCard({ destination, updateFavorite, deleteFavorite, showDeleteButton, hideFavoriteButton}) {
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

  //this code was removing the destination from the server. no DELETE request to the server, just update fav status of destination needed
  // const handleDelete = () => {
  //   fetch(`http://localhost:4000/places/${destination.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         deleteFavorite(destination.id);
  //       } else {
  //         throw Error("DELETE failed");
  //       }
  //     })
  //     .catch((err) => console.error("couldnt reach server"));
  // };

  const removeFromFavorites = () => {
    deleteFavorite(destination.id);
  }; 
 
  return (
    <li>
      <img src={destination.image} alt={`${destination["city-name"]}`}  />
      <h3>Country Name: {destination["country-name"]}</h3>
      <h4>City Name: {destination["city-name"]}</h4>
        {!hideFavoriteButton && (
        favorite ? (
          <button className="favorite" onClick={toggleFavorite}>Favorite</button>
        ) : (
          <button onClick={toggleFavorite}>Unfavorite</button>
        )
      )}
      {showDeleteButton && (
        <button onClick={removeFromFavorites}>Remove from Favorites</button>
      )}
    </li>
  );
}

export default CityCard;
