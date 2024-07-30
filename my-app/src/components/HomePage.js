import { useEffect, useState } from "react";
import Header from "./Header";
import FavoriteForm from "./FavoriteForm";
import NewDestinationForm from "./NewDestinationForm";
import CityList from "./CityList";
import Search from "./Search";

function HomePage() {
  const [destinations, setDestination] = useState([]);
  //const [searchDestination, setSearch] = useState("")
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/places")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  // const addPlaces = (newPlaces) => {
  //   setSearchplaces([...destinations, newPlaces])
  // };

  const addDestination = (newDestination) => {
    setDestination([...destinations, newDestination]);
  };

  const updateSearch = (newSearch) => setSearch(newSearch);

  
  
  const filteredDestinations = destinations.filter((curDestination) => {

    console.log(curDestination)
    
    return (
      curDestination["city-name"].toLowerCase().includes(search.toLowerCase()) ||
      curDestination["country-name"].toLowerCase().includes(search.toLowerCase())
    );

  });
  

return (
  <div>
    <header>
      <Header />
    </header>

    <div>
    <h1> HomePage </h1>
      <Search search={search} updateSearch={updateSearch} />
      <FavoriteForm />
      <NewDestinationForm addDestination={addDestination} />

      {filteredDestinations.map((destination) => (
        <CityList key={destination.id} destination={destination} />
      ))}

    </div>
  </div>
);
}

export default HomePage;
