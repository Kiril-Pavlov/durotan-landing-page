import React from "react";
import "./Footer.css";

import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi"
import payment from "../../assets/payment.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-subcontainer">
          <div className="footer-title" style={{marginTop:"0px"}}>DUROTAN</div>
          <ul className="footer-list">
            <li>
              268 Elizaberth Ave Str, Brooklyn,
              <br />
              CA, 90025
            </li>
            <li>+0082 561 43 34</li>
            <li><a href="mailto:support@durotan.com">support@durotan.com</a></li>
          </ul>
          <div className="footer-social-icons">
            <a href="https://twitter.com">
              <FiTwitter />
            </a>
            <a href="https://facebook.com">
              <FiFacebook />
            </a>
            <a href="https://instagram.com">
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="footer-subcontainer">
          <div className="footer-title">FAQS</div>
          <ul className="footer-list">
            <li>Information</li>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Gift Card</li>
            <li>Guest purchase</li>
            <li>Electronic receipt</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="footer-subcontainer">
          <div className="footer-title"> COMPANY</div>
          <ul className="footer-list">
            <li>About Durotan</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Our Journals</li>
          </ul>
        </div>

        <div className="footer-subcontainer">
          <div className="footer-title">NEW SLETTER</div>
          <ul className="footer-list">
            <li>
              Be the first to get the latest news about trends, promotions and much
              more!
            </li>
            <input type="email" placeholder="Enter your email address" className="footer-input"></input>
            <p className="subscribing">
              By subscribing, you accept the <a href="#">Privacy Policy</a>
            </p>
            <button> <a href="#" style={{ color: "white" }}>SUBSCRIBE</a> </button>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="copyright-left">
        Ⓒ 2022 DUROTAN, ALL RIGHTS RESERVED
          <ul>
            <li>EN</li>
            <li>FR</li>
          </ul>
        </div>
        <div className="footer-payment">
          <span>ACCEPT FOR</span>   
          <img src={payment} alt="Payment methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
