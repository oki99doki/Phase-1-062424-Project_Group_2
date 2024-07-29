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
    .then(res => res.json())
    .then(data => setDestination(data))
  }, [])


  // const addPlaces = (newPlaces) => {
  //   setSearchplaces([...destinations, newPlaces])
  // };

  const addDestination = (newDestination) => {
    setDestination([...destinations, newDestination])
  }




return (
  <>
  <header>
  <Header />
  </header>
  
  <h1> HomePage </h1>

  <div>
  <FavoriteForm /> 
  <NewDestinationForm addDestination={addDestination} />
  </div>

  {
  destinations.map(destination => <CityList key={destination.id} destination={destination} />)
  }
  
  </>

)
}

export default HomePage;