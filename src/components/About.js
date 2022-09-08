import React from "react";
import "./About.css";
import { RiShipLine } from 'react-icons/ri';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { RiTShirt2Line } from 'react-icons/ri';
const About = () => {
  return (
    <div>
      <div className="aboutDuratan">
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
  
 <RiTShirt2Line/>
        <p className="materials"> 
          100% polyurethane. & 100% polyester, products of Durotan alway choose
          detail and safety with customer. Your sastification is our reputation
        </p>
        <br></br>
        <RiShipLine/>
        <p className="freeShipping">
          Durotan free shipping for all orders over $199 in domestic & over $399
          for worldwide
        </p>
        <br></br>
        < RiMoneyDollarCircleLine/>
        <p className="securePayment">
          We guarantee 100% secure with online payment on our site. In case if
          you have any problems with our product, you can return it back in 30
          days
        </p>
        <br></br>
      </div>
      <div className="featuredCollections">
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
        <img
          style={{ height: "500px" }}
          src="http://durotan-react-1.ninethemes.net/images/default/featured_product_1.png"
        />
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
        <img
          style={{ height: "500px" }}
          src="http://durotan-react-1.ninethemes.net/images/default/featured_product_2.png"
        />
        <button classname="explore">EXPLORE NOW</button>
      </div>
    </div>
  );
};

export default About;
