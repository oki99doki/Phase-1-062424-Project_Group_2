import React from "react";


function CityCard({destination}) {



    return (
        <li>
        <img src={destination.image}/>
        <h3>Country Name: {destination["country-name"]}</h3>
        <h4>City Name: {destination["city-name"]}</h4>
        </li>
    )
};

export default CityCard; 