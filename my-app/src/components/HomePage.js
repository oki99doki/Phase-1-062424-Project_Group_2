import { useEffect, useState } from "react";
import Header from "./Header";
import FavoriteForm from "./FavoriteForm";
import FavoritePage from "./FavoritePage;"
import NewDestinationForm from "./NewDestinationForm";
import CityList from "./CityList";

function HomePage() {

const [destinations, setDestination] = useState([])
const [searchPlaces, setSearchplaces] = useState("")

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
  
  const addPlaces = (newPlaces) => {
    setSearchplaces([...destinations, newPlaces])
  };




return (
  <>
  <header>
  <Header />
  </header>
  
  <h1> HomePage </h1>

  <div>
  <FavoriteForm addPlaces={addPlaces}/> 
  <FavoritePage destinations={destinations}
  <NewDestinationForm addPlaces={addPlaces}/>
  <Search setSearch={setSearchplaces}/>
  {/* <CityList destinations={destinations}/> */}
  </div>

  {
  destinations.map(destination => <CityList key={destination.id} destination={destination} />)
  }
  
  </>

)
}

export default HomePage;