import React from "react";
import CityCard from "./CityCard";


function CityList({destination, updateFavorite}) {



    return(
        <>
            <div>
                <CityCard destination={destination} updateFavorite={updateFavorite}/>
            </div>
        
        
        </>
    );
};

export default CityList; 
