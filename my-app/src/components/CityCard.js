import React, { useEffect, useState } from "react";

function CityCard({ destination, updateFavorite}) {
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

  return (
    <li>
      <img src={destination.image} />
      <h3>Country Name: {destination["country-name"]}</h3>
      <h4>City Name: {destination["city-name"]}</h4>
      {favorite ? (
        <button className="favorite" onClick={toggleFavorite}>
          favorite
        </button>
      ) : (
        <button onClick={toggleFavorite}>unfavorite</button>
      )}
    </li>
  );
}

export default CityCard;
