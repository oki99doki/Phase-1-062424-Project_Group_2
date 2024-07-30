import React from "react";
import CityCard from "./CityCard";


function FavoritePage( { destinations, favorites, onFavoriteCity }) {
    // const favoriteCities = destinations.filter((destination) => (destination.favorite))   //add to db.json "favorite":false,

    // const favoriteCityCard = favoriteCities.map((destination) =>{
    //     <CityCard
    //         key={destination.id}
    //         destination={destination}
    //         onFavoriteCity={onFavoriteCity} 
    //     />
    // })


    return (
        <div>
            {/* <div> create css */}
                <h2 className="favorite-city-header">Favorite City</h2>
            <div>
                {/* <ul className="favorites-container">{favoriteCityCard}</ul> */}
            </div>
            
        
        </div>
    );
};


export default FavoritePage; 