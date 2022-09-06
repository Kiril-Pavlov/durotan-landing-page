import React from "react";

const Contact = () => {
  return (
    <div className="contact-customers">
      <div className="existing-customers">
        <h3 classname="customers-existing">EXISTING CUSTOMERS</h3>
        <p className="signIn">Sign in to your account below:</p>
        <input type="email" placeholder="Email address"></input>
        <br></br>
        <input type="password" placeholder="Password"></input>
        <br></br>
        <button classname="signInBtn">SIGN IN</button>
      </div>
      <div className="new-customers">
        <h3 classname="customers-new">NEW CUSTOMERS</h3>
        <p class="createAccount">Create an account below:</p>
        <input type="text" placeholder="First name"></input>
        <br></br>
        <input type="text" placeholder="Last name"></input>
        <br></br>
        <input type="email" placeholder="Email address"></input>
        <br></br>
        <input type="password" placeholder="Password"></input>
        <button classname="signInBtn">CREATE AN ACCOUNT</button>
      </div>
    </div>
  );
};

export default Contact;
