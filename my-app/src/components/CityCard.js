import React, { useState } from "react";



function CityCard({destination}) {
const [favorite, setFavorite] = useState(true)


const toggleFavorite = () => {
    setFavorite(prev => !prev)
}

const handleSubmit = ((e) => {
    e.preventDefault()
    fetch(`http://localhost:4000/places/${id}`), {
    method: 'Patch',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({favorite: !favorite})
    }
    .then(res => {
        if(res.ok){
            return res.json()
        } else {
            throw Error('patch failed')
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error('couldnt reach server'))
})


    return (
        <li>
        <img src={destination.image}/>
        <h3>Country Name: {destination["country-name"]}</h3>
        <h4>City Name: {destination["city-name"]}</h4>
        {favorite ? (
        <button className="favorite" onClick={toggleFavorite}>favorite</button>
      ) : (
        <button onClick={toggleFavorite}>unfavorite</button>
      )}
        </li>
    )
};

export default CityCard; 