import { useEffect, useState } from "react";
import CityList from "./CityList";
import Search from "./Search";

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

  const updateSearch = (newSearch) => setSearch(newSearch);

  const filteredDestinations = destinations.filter((curDestination) => {
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

  const deleteDestination = (id) => {
    setDestination(destinations.filter((destination) => destination.id !== id));
  };

  const deleteFromFavorites = (id) => {
    setDestination(
      destinations.map((destination) =>
        destination.id === id
          ? { ...destination, favorite: false }
          : destination
      )
    );
  };

  return (
    <>
      <h1>Popular Travel Destinations</h1>
      <div>
        <Search search={search} updateSearch={updateSearch} />
        <CityList
          destinations={filteredDestinations}
          updateFavorite={updateFavorite}
          deleteDestination={deleteDestination}
          deleteFromFavorites={deleteFromFavorites}
          showDeleteButton={true}
          hideFavoriteButton={false}
          isFavoritePage={false}
        />
      </div>
    </>
  );
}

export default HomePage;
