import React, { useEffect, useState } from 'react';
import CityCard from './CityCard';

function FavoritesPage({ destination }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch the list of favorite places from the server
    fetch('http://localhost:4000/places')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Failed to fetch favorites');
        }
      })
      .then((data) => {
        // Filter out the favorite places
        const favoritePlaces = data.filter(place => place.favorite);
        setFavorites(favoritePlaces);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:4000/places/${destination.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          deleteFavorite(destination.id);
        } else {
          throw Error("DELETE failed");
        }
      })
      .catch((err) => console.error("couldnt reach server"));
  };


  const updateFavorite = (updatedPlace) => {
    // Update the favorites state with the modified place
    setFavorites((prevFavorites) =>
      prevFavorites.map((place) =>
        place.id === updatedPlace.id ? updatedPlace : place
      )
    );
  };

  const deleteFavorite = (id) => {
    // Remove the deleted place from the state
    setFavorites((prevFavorites) =>
      prevFavorites.filter((place) => place.id !== id)
    );
  };

  return (
    <div>
      <h1>Favorite Places</h1>
      <ul>
        {favorites.length === 0 ? (
          <p>No favorite places added yet.</p>
          ) : (
          favorites.map((place) => (
            <CityCard
              key={place.id}
              destination={place}
              updateFavorite={updateFavorite}
              deleteFavorite={deleteFavorite}
              button onClick={handleDelete}
            />
                                   
          ))
        )}
        <button onClick={handleDelete}>Delete</button>
      </ul>
      
    </div>
  );
}

export default FavoritesPage;