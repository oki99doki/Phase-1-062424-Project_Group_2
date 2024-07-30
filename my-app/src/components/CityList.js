import React from "react";
import CityCard from "./CityCard";


function CityList({ destinations, onFavoriteCity}) {

    const citiesArray = destinations.map((destination) => {
            return <CityCard
            key={destination.id}
            destination={destination}
            onFavoriteCity={onFavoriteCity} />
    });

    return(
        <>
        {/* create css */}
            <div className="all-cards">
                <ul className="app-container">{citiesArray}</ul>
            </div>
        </>
    );
};

export default CityList; 
