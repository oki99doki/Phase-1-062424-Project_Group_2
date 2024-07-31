import { useEffect, useState } from "react";
import Header from "./Header";
import NewDestinationForm from "./NewDestinationForm";
import CityList from "./CityList";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [destinations, setDestination] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/places")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Could not fetch the data from promise");
        }
      })
      .then((data) => setDestination(data))
      .catch((err) =>
        console.error("Was unable to reach the server for GET Request")
      );
  }, []);

  const addDestination = (newDestination) => {
    setDestination([...destinations, newDestination]);
  };

  const updateSearch = (newSearch) => setSearch(newSearch);

  const filteredDestinations = destinations.filter((curDestination) => {
    console.log(curDestination);

    return (
      curDestination["city-name"]
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      curDestination["country-name"]
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  function updateFavorite(updatedDestination) {
    setDestination(
      destinations.map((prevDestination) => {
        if (updatedDestination.id === prevDestination.id) {
          return { ...prevDestination, favorite: updatedDestination.favorite };
        } else {
          return prevDestination;
        }
      })
    );
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <h1> HomePage </h1>

      <div>
        <Search search={search} updateSearch={updateSearch} />
        <NewDestinationForm addDestination={addDestination} />
        <CityList
          destinations={filteredDestinations}
          updateFavorite={updateFavorite}
        />
        <NavLink to="/FavoritePage">Go to Favorites</NavLink>
      </div>
    </>
  );
}

export default HomePage;
