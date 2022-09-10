import React from "react";

import "./OurInstagram.css"

import { FiInstagram } from "react-icons/fi"

import instagram1 from "../assets/instagram_1.jpg"
import instagram2 from "../assets/instagram_2.jpg"
import instagram3 from "../assets/instagram_3.jpg"
import instagram4 from "../assets/instagram_4.jpg"
import instagram5 from "../assets/instagram_5.jpg"


const OurInstagram = () => {
  return <div className="instagram-container">
    <h3 className="instagram-title">FOLLOW OUR INSTAGRAM</h3>
    <p>Our official instagram <a href="#">@durotan</a> or handtags <a href="#">#durotan.clothing</a>
    </p>
    <div className="instagram-image-container">
      <div className="instagram-image">
        <div className="hover-image">
          <img src={instagram1} alt="Instagram 1" />
        </div>
        <div className="instagram-hover">
          <FiInstagram/>
        </div>
      </div>
      <div className="instagram-image">
        <div className="hover-image">
          <img src={instagram2} alt="Instagram 2" />
        </div>
        <div className="instagram-hover">
          <FiInstagram/>
        </div>
      </div>
      <div className="instagram-image">
        <div className="hover-image">
          <img src={instagram3} alt="Instagram 3" />
        </div>
        <div className="instagram-hover">
          <FiInstagram/>
        </div>
      </div>
      <div className="instagram-image">
        <div className="hover-image">
          <img src={instagram4} alt="Instagram 4" />
        </div>
        <div className="instagram-hover">
          <FiInstagram />
        </div>
      </div>
      <div className="instagram-image">
        <div className="hover-image">
          <img src={instagram5} alt="Instagram 5" />
        </div>
        <div className="instagram-hover">
          <FiInstagram />
        </div>
      </div>
    </div>
  </div>;
};

export default OurInstagram;
