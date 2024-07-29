import React from "react";
import CityCard from "./CityCard";


function CityList({destination}) {



    return(
        <>
            <div>
                <CityCard destination={destination}/>
            </div>
        
        
        </>
    );
};

export default CityList; 
