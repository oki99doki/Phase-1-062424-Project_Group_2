import { useState } from "react"; // Import useState from React
import NewDestinationForm from "./NewDestinationForm";
import { NavLink } from "react-router-dom";
// import CSS from "./NewDestination.css";

function NewDestination() {
  // Initialize places as an empty array
  const [places, setPlaces] = useState([]);

  // Function to add new places to the state
  const addPlaces = (newPlace) => {
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  return (
    <>
      <div>
        <NavLink to={"/"} className="button">
          Back to Homepage
        </NavLink>
        <NavLink to={"/FavoritePage"} className="button">
          Favorites
        </NavLink>
        <NewDestinationForm addPlaces={addPlaces} />
      </div>
      <div>
        {/* Render the list of places to ensure they are being added correctly */}
        <ul>
          {places.map((place, id) => (
            <li key={id}>
              {place["city-name"]}, {place["country-name"]},
              <img src={place.image} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NewDestination;
