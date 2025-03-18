import { useState, useEffect } from "react";

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [visibleHotels, setVisibleHotels] = useState(6);

    useEffect(() => {
        fetch("/datas/hotels.json") // Charge les données (ajuste si nécessaire)
            .then((res) => res.json())
            .then((data) => setHotels(data));
    }, []);

    const loadMore = () => {
        setVisibleHotels((prev) => prev + 6);
    };

    return (
        <div>
            <h2>Liste des Hôtels</h2>
            <div className="hotel-list">
                {hotels.slice(0, visibleHotels).map((hotel) => (
                    <div key={hotel.id} className="hotel-card">
                        <h3>{hotel.name}</h3>
                        <p>{hotel.location}</p>
                        <img src={hotel.image} alt={hotel.name} width="200" />
                    </div>
                ))}
            </div>
            {visibleHotels < hotels.length && (
                <button onClick={loadMore}>Load More</button>
            )}
        </div>
    );
};

export default HotelList;
