import React from 'react';
import './CityDetails.css'; // Pour styliser les détails de la ville

const CityDetails = ({ city }) => {
  return (
    <div className="city-details">
      <h1>{city.name}</h1>
      <p>{city.description}</p>
      <h2>Attractions</h2>
      <ul>
        {city.attractions.map((attraction, index) => (
          <li key={index}>{attraction}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityDetails;
