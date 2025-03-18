import React from "react";
import Banner from "../components/Banner";
import "./Home.css"; 

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="home-content">
        <h2>Explorez nos hôtels recommandés</h2>
        <p>Découvrez les hôtels les plus populaires et bénéficiez de promotions exclusives.</p>
        <button className="explore-btn">Explorer</button>
      </div>
    </div>
  );
};

export default Home;
