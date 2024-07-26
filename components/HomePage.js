import { useEffect, useState } from "react";

function HomePage() {

const [places, SetPlaces] = useState([])

useEffect(() => {
    fetch('http://localhost:4000/places')
    .then(res => res.json())
    .then(data => SetPlaces(data))
  }, [])

return (

)



}