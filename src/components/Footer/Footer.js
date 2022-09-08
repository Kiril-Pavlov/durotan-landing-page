import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="durotan">
        <div className="footers">DUROTAN</div>
        <li>
          268 Elizaberth Ave Str, Brooklyn,
          <br />
          CA, 90025
        </li>
        <li>+0082 561 43 34</li>
        <li>support@durotan.com</li>
      </ul>
      <ul className="faqs">
      <div className="footers">FAQS</div>
        
        <li>Information</li>
        <li>Payment</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Gift Card</li>
        <li>Guest purchase</li>
        <li>Electronic receipt</li>
        <li>Terms and Conditions</li>
      </ul>
      <ul className="company">
     <div className="footers"> COMPANY</div>  
        <li>About Durotan</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>Our Journals</li>
      </ul>
      <ul className="newsletter">NEW SLETTER</ul>
      <li>
        Be the first to get the latest news about trends, promotions and much
        more!
      </li>
      <input type="email" placeholder="Enter your email address"></input>
      <p className="subscribing">
        By subscribing, you accept the <a href="#">Privacy Policy</a>
      </p>
    </div>
  );
};

export default Footer;
