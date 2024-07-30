import { useEffect, useState } from "react";
import Header from "./Header";
import FavoritePage from "./FavoritePage";
import NewDestinationForm from "./NewDestinationForm";
import CityList from "./CityList";

function HomePage() {

const [destinations, setDestination] = useState([]);
const [searchPlaces, setSearchplaces] = useState("");
const [favorites, setFavorites] = useState([]);

useEffect(() => {
    fetch('http://localhost:4000/places')
    .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
            throw Error("get went wrong");
        }
    })
    .then(data => setDestination(data))
    .catch((err) => console.error("couldnt reach server"));
  }, [])


  // const addPlaces = (newPlaces) => {
  //   setSearchplaces([...destinations, newPlaces])
  // };

  const addDestination = (newDestination) => {
    setDestination([...destinations, newDestination])
  }

      //create cb fxn for citycards to render on FavPage
  function favoritedCity(updateFavCity) {
    
    const updateFavCityArray = destinations.map((destination) => {
      if(destination.id === updateFavCity.id){
        return updateFavCity;
      }else {
        return destination
      }
    });
    setDestination(updateFavCityArray) 
    }





return (
  <>
  <header>
  <Header />
  </header>
  
  <h1> HomePage </h1>

  <div>
  <FavoritePage /> 
  <NewDestinationForm addDestination={addDestination} />
  </div>

  {
  destinations.map(destination => <CityList key={destination.id} destination={destination} />)
  }
  
  </>

)
}

export default HomePage;