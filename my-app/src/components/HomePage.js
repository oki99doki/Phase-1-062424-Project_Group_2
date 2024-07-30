import { useEffect, useState } from "react";
import Header from "./Header";
import FavoriteForm from "./FavoriteForm";
import NewDestinationForm from "./NewDestinationForm";
import CityList from "./CityList";

function HomePage() {

const [destinations, setDestination] = useState([])
const [searchPlaces, setSearchplaces] = useState("")

useEffect(() => {
    fetch('http://localhost:4000/places')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
         throw Error ('Could not fetch the data from promise')
      }
    })
    .then(data => setDestination(data))
    .catch(err => console.error('Was unable to reach the server for GET Request'))
  }, [])


  const addPlaces = (newPlaces) => {
    setSearchplaces([...destinations, newPlaces])
  };

  function updateFavorite(updatedDestination) {
    setDestination(destinations.map(prevDestination => {
      if (updatedDestination.id === prevDestination.id) {
        return { ...prevDestination, favorite: updatedDestination.favorite };
      } else {
        return prevDestination;
      }
    }));
  }


return (
  <>
  <header>
  <Header />
  </header>
  
  <h1> HomePage </h1>

  <div>
  <FavoriteForm /> 
  <NewDestinationForm addPlaces={addPlaces} />
  </div>

  {
  destinations.map(destination => <CityList key={destination.id} destination={destination} updateFavorite={updateFavorite} />)
  }
  
  </>

)
}

export default HomePage;