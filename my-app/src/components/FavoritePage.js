import React, { useState } from "react";
import CityCard from "./CityCard";

//favorites list reset when page re-renders
//use .some()
//The .some() method in JavaScript is used to test whether at least one element in an array passes a given condition. 
// It returns a boolean value: true if at least one element satisfies the condition, and false otherwise.


function FavoritePage() {
    //{ destinations, favorites, onFavoriteCity }
    
    const [favorites, setFavorites] = useState([]);

    const handleFavoriteToggle = (city) => {
        if (favorites.some(fav => fav.id === city.id)) {
          // Remove from favorites
          const newFavorites = favorites.filter(fav => fav.id !== city.id);
          setFavorites(newFavorites);
        } else {
          // Add to favorites
          const newFavorites = [...favorites, city];
          setFavorites(newFavorites);
        }
      };
    
      return (
        <div>
          <h1>Favorites</h1>
          {favorites.length === 0 ? (
            <p>No favorites added yet.</p>
          ) : (
            <div className="city-cards">
              {favorites.map((city) => (
                <CityCard
                  key={city.id}
                  city={city}
                  onFavoriteToggle={handleFavoriteToggle}
                  isFavorite={true} // Always true for items in the favorites list
                />
              ))}
            </div>
          )}
        </div>
      );
    };
    




    // const favoriteCities = destinations.filter((destination) => (destination.favorite))   

    // const favoriteCityCard = favoriteCities.map((destination) =>{
    //     <CityCard
    //         key={destination.id}
    //         destination={destination}
    //         onFavoriteCity={onFavoriteCity} 
    //     />
    // })


//     return (
//         <div>
//             {/* <div> create css */}
//                 <h2 className="favorite-city-header">Favorite Destinations</h2>
//             <div>
//                 {/* <ul className="favorites-container">{favoriteCityCard}</ul> */}
//             </div>
            
        
//         </div>
//     );
// };


export default FavoritePage; 