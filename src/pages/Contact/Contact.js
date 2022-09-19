import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-customers">
      <div className="existing-customers">
        <h3 classname="customers-existing">EXISTING CUSTOMERS</h3>
        <p className="customerPara">Sign in to your account below:</p>
        <input
          type="email"
          placeholder="Email address"
          className="customerInput"
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="customerInput"
        ></input>
        <div className='forgotPass'>forgot password?</div>
        
        <button classname="signInBtn">SIGN IN</button>
      </div>
      <div className="new-customers">
        <h3 classname="customers-new">NEW CUSTOMERS</h3>
        <p className="customerPara">Create an account below:</p>
        <div className="customerFullName">
          <input type="text" placeholder="First name" className='customerInput'></input>

          <input type="text" placeholder="Last name" className='customerInput'></input>
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="customerInput"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="customerInput"
        ></input>

        <button classname="signInBtn">CREATE AN ACCOUNT</button>
      </div>
    </div>
  );
};

export default Contact;
