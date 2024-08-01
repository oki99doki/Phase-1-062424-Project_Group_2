import { useState } from "react";
import NewDestinationForm from "./NewDestinationForm";

function NewDestination() {
  const [places, setPlaces] = useState([]);

  const addPlaces = (newPlace) => {
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  return (
    <>
      <div>
        <NewDestinationForm addPlaces={addPlaces} />
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
