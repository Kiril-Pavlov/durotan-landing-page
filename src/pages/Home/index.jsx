import React, { useState } from "react";

import About from '../../components/About';
import OurProducts from '../../components/OurProducts';
import OurInstagram from '../../components/OurInstagram';
import OurJournal from '../../components/OurJournal';

import slider1Image from "../../assets/slider-1-image.png";
import slider2Image from "../../assets/slider-2-image.png";
import slider3Image from "../../assets/slider-3-image.png";

import { AiOutlinePlayCircle } from "react-icons/ai";

import "./Home.css";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState("1");

  const decrementSliderState = () => {
    let activeSlideInt = Number(activeSlide);
    if (activeSlideInt !== 1) {
      setActiveSlide(String(activeSlideInt - 1));
    } else {
      setActiveSlide("1");
    }
  };

  const incrementSliderState = () => {
    let activeSlideInt = Number(activeSlide);
    if (activeSlideInt !== 3) {
      setActiveSlide(String(activeSlideInt + 1));
    } else {
      setActiveSlide("3");
    }
  };

  return (
    <div className="home-container">
      <div className="carousel-container">
        {activeSlide === "1" ? (
          <div className="carousel-1-container">
            <h4 className="small-subtitle">NEW ARRIVAL</h4>
            <h2 className="carousel-title">Basic Colours Comeback</h2>
            <p className="carousel-paragraph">
              Less is more never out of date. In last of theese years, basic
              colours will comeback, discover our collections and choose your
              style
            </p>
            <div className="carousel-1-buttons">
              <button className="carousel-1-button">SHOP NOW</button>
              <div className="play-button">
                <AiOutlinePlayCircle /> <span>VIEW LOOKBOOK</span>{" "}
              </div>
            </div>
            <div className="carousel-state-buttons">
              <button
                onClick={decrementSliderState}
                className="carousel-state-counter"
              >
                PREV
              </button>
              <span>|</span>
              <button
                onClick={incrementSliderState}
                className="carousel-state-counter"
              >
                NEXT
              </button>
            </div>
            <img src={slider1Image} alt="" className="slider-1-image" />
          </div>
        ) : activeSlide === "2" ? (
          <div>
            <div className="carousel-1-container">
              <h4 className="small-subtitle">TRENDING ITEMS</h4>
              <h2 className="carousel-title">Crossbody Belt Bags </h2>
              <p className="carousel-paragraph">
                Product by 100% polyuresthane. & 100% polyester,All crossbody
                belt bags bring the usefuls and suit for your any style{" "}
              </p>
              <h4 className="small-subtitle">
                START FROM <br></br>
                <span className="green-price">$59.00</span>
              </h4>
              <div className="carousel-state-buttons">
                <button
                  onClick={decrementSliderState}
                  className="carousel-state-counter"
                >
                  PREV
                </button>
                <span>|</span>
                <button
                  onClick={incrementSliderState}
                  className="carousel-state-counter"
                >
                  NEXT
                </button>
              </div>
              <img src={slider2Image} alt="" className="slider-2-image" />
            </div>
          </div>
        ) : activeSlide === "3" ? (
          <div className="carousel-1-container">
            <h2 className="carousel-title">
              Discout <span style={{ color: "red" }}>50% </span>Sunglasses
            </h2>
            <h4 className="small-subtitle">CLIP-ON LENS</h4>
            <p className="carousel-paragraph">
              Over 50 items sunglasses ready for discount,available
              in-stock,Grab it now!
            </p>
            <button className="carousel-3-button">SHOP NOW</button>
            <div className="carousel-state-buttons">
              <button
                onClick={decrementSliderState}
                className="carousel-state-counter"
              >
                PREV
              </button>
              <span>|</span>
              <button
                onClick={incrementSliderState}
                className="carousel-state-counter"
              >
                NEXT
              </button>
            </div>
            <img src={slider3Image} alt="" className="slider-3-image" />
          </div>
        ) : null}
      </div>
      <About />
      <div className="product-journal-instagram-wrapper">
        <OurProducts />
        <OurJournal />
        <OurInstagram />
      </div>
    </div>
  );
};

export default Home;
