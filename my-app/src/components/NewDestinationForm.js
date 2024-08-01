import { useState } from "react";
import HomePage from "./HomePage";

//1. form state
//2. align values with state
//3. onChange
function NewDestinationForm({ addPlaces }) {
  const [form, setForm] = useState({
    "country-name": "",
    "city-name": "",
    image: "",
    favorite: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form, //destructure current state
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/places", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...form }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("post went wrong");
        }
      })
      .then((data) => addPlaces(data))
      .catch((err) => console.log("couldnt reach server"));
  };

  return (
    <div className="new-destination-form">
      <h2>New Destination</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleChange(e)}
          value={form["country-name"]}
          type="text"
          name="country-name"
          placeholder="Country Name"
        />
        <input
          onChange={(e) => handleChange(e)}
          value={form["city-name"]}
          type="text"
          name="city-name"
          placeholder="City Name"
        />
        <input
          onChange={(e) => handleChange(e)}
          value={form.image}
          type="text"
          name="image"
          placeholder="Image URL"
        />

        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
}

export default NewDestinationForm;
