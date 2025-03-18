import React, { useState } from 'react';
import HotelCard from './HotelCard'; // Importe le composant de la carte d'hôtel

const Hotels = () => {
  const [hotels, setHotels] = useState([
    { id: 1, name: 'Hotel 1', description: 'Description de l\'hôtel 1', image: 'hotel1.jpg' },
    { id: 2, name: 'Hotel 2', description: 'Description de l\'hôtel 2', image: 'hotel2.jpg' },
    { id: 3, name: 'Hotel 3', description: 'Description de l\'hôtel 3', image: 'hotel3.jpg' },
    { id: 4, name: 'Hotel 4', description: 'Description de l\'hôtel 4', image: 'hotel4.jpg' },
    { id: 5, name: 'Hotel 5', description: 'Description de l\'hôtel 5', image: 'hotel5.jpg' },
  ]);
  const [visibleCount, setVisibleCount] = useState(5);

  const loadMoreHotels = () => {
    const moreHotels = [
      { id: 6, name: 'Hotel 6', description: 'Description de l\'hôtel 6', image: 'hotel6.jpg' },
      { id: 7, name: 'Hotel 7', description: 'Description de l\'hôtel 7', image: 'hotel7.jpg' },
      { id: 8, name: 'Hotel 8', description: 'Description de l\'hôtel 8', image: 'hotel8.jpg' },
    ];
    setHotels((prevHotels) => [...prevHotels, ...moreHotels]);
    setVisibleCount(visibleCount + 3);
  };

  return (
    <div className="hotels-container">
      <h1>Nos Hôtels</h1>
      <div className="hotels-list">
        {hotels.slice(0, visibleCount).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <button onClick={loadMoreHotels} className="load-more-btn">
        Load More
      </button>
    </div>
  );
};

export default Hotels;
