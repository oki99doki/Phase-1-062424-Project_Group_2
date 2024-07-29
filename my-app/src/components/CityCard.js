import React from "react";


function CityCard({destination}) {



    return (
        <li>
        <img src={destination.image}/>
        <h3>country-name: {destination["country-name"]}</h3>
        <h4></h4>

        
        </li>
    )
};

export default CityCard; 