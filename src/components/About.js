import React from "react";
import "./About.css";
import { RiShipLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiTShirt2Line } from "react-icons/ri";
import brandImg from "../assets/brand-name-logo.png";
import clothingImg from "../assets/clothing-logo.png";
import gapImg from "../assets/gap-logo.png";
import masoreImg from "../assets/masore-logo.png";
import supraImg from "../assets/supra.png";
import belt from "../assets/belt.png";
import product1 from "../assets/featured_product_1.png";
import product2 from "../assets/featured_product_2.png";
import beltPart from "../assets/belt2.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="aboutDuratan">
        <div className="image-container">
          <img src={brandImg} />
          <img src={clothingImg} />
          <img src={gapImg} />
          <img src={masoreImg} />
          <img src={supraImg} />
        </div>
        <h2 className="aboutTitle">About Durotan</h2>
        <p className="aboutPara">
          Established in 1991, Durotan & Logan Cee, 2 fashion artists work
          together in UK, start from design the casual for people around their
          location.The inspiration got from natural, color pastel & activities
          the daily. Durotan’s items alway look very basic but never out trend,
          easy to mixed with any style. Then, they developed with serires 5
          stores cover all United Kingdom
        </p>
      </div>
      <div className="qualityMaterials">
        <div className="quality-materials-left">
          <div className="quality-material-item">
            <div className="icon-container">
              <RiTShirt2Line classname="icon" size="100" />
            </div>
            <div className="qulity-material-item-content">
              <h3>QUALITY MATERIALS</h3>

              <p className="materials">
                100% polyurethane. & 100% polyester, products of Durotan alway
                choose detail and safety with customer. Your sastification is
                our reputation
              </p>
            </div>
          </div>
          <div className="quality-material-item">
            <div className="icon-container">
              <RiShipLine classname="icon" size="100" />
            </div>
            <div className="qulity-material-item-content">
              <h3>FREE SHIPPING</h3>
              <p className="freeShipping">
                Durotan free shipping for all orders over $199 in domestic &
                over $399 for worldwide
              </p>
            </div>
          </div>
          <div className="quality-material-item">
            <div className="icon-container">
              <RiMoneyDollarCircleLine classname="icon" size="100" />
            </div>
            <div className="qulity-material-item-content">
              <h3>SECURE PAYMENT</h3>
              <p className="securePayment">
                We guarantee 100% secure with online payment on our site. In
                case if you have any problems with our product, you can return
                it back in 30 days
              </p>
            </div>
          </div>
        </div>
        <div className="quality-materials-right">
          <img src={belt} />
          <img src={beltPart} />
        </div>
      </div>
      {/* <div className="featuredCollections">
        <h4 className="featured">Featured Collections</h4>
        <p className="featuredPara">
          New arrivals, best seling or any discount programs, click on any
          collection that you’re looking for
        </p>
      </div>
      <div className="coats-jackets" style={{ backgroundColor: "white" }}>
        <h4 className="coats_jackets">COATS & JACKETS</h4>
        <h1 classname="basicJackets">BASIC JACKETS</h1>
        <p className="text">
          Simple alway is the best choice for your any style. Check our lookbook
        </p>
        <img src={product1} />
        <button classname="explore">EXPLORE NOW</button>
      </div>
      <div
        className="accessories"
        style={{
          position: "relative",
          bottom: "880px",
          left: "800px",
        }}
      >
        <h4 className="coats_jackets">ACCESSORIES</h4>
        <h1 classname="basicJackets">ATHLETIC CREW</h1>
        <p className="text">
          Inspiration from Athletic Crew - College Division, A brown cap for
          youngs
        </p>
        <img src={product2} />
        <button classname="explore">EXPLORE NOW</button>
      </div> */}
    </div>
  );
};

export default About;
