import React from "react";

import Hero from "../../components/Hero";
import About from "../../components/About";
import OurProducts from "../../components/OurProducts";
import OurInstagram from "../../components/OurInstagram";
import OurJournal from "../../components/OurJournal";
import FeaturedCollections from "../../components/FeaturedCollections";

import "./Home.css";

const Home = () => {

  return (
    <div className="home-container">
      <Hero />
      <About />
      <FeaturedCollections />
      <div className="product-journal-instagram-wrapper">
        <OurProducts />
        <OurJournal />
        <OurInstagram />
      </div>
    </div>
  );
};

export default Home;
