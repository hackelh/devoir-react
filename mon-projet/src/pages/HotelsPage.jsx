import React, { useState, useEffect } from 'react';
import HotelCard from '../components/HotelCard';
import './HotelsPage.css';
import hotelsData from '../data/hotel.json';

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

  return (
    <div className="hotels-page">
      <h2>liste des hotels</h2>
      <div className="hotels-list">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
