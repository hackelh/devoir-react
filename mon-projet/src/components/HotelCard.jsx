import React from 'react';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>{hotel.description}</p>
      <button>Book Now</button>
    </div>
  );
};

export default HotelCard;
