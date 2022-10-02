import React from "react";
import "./Cart.css";

import cart1 from "../../assets/cart1.jpg";
import cart2 from "../../assets/cart2.jpg";
import cart3 from "../../assets/cart3.jpg";
import payment from "../../assets/payment.png"

import { AiOutlineDollar } from "react-icons/ai"

const Cart = () => {
  return (
    <div className="main-cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-container-left">

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">QTY</th>
                <th scope="col">SUBTOTAL</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img style={{ width: "100px" }} src={cart1}></img>
                </th>
                <td>$56.99</td>
                <td>2</td>
                <td>$113.98</td>
                <td>X</td>
              </tr>
              <tr>
                <th scope="row">
                  <img style={{ width: "100px" }} src={cart2}></img>
                </th>
                <td>$45.5</td>
                <td>1</td>
                <td>$45.5</td>
                <td>X</td>
              </tr>
              <tr>
                <th scope="row">
                  <img style={{ width: "100px" }} src={cart3}></img>
                </th>
                <td>$72.99</td>
                <td>1</td>
                <td>$72.99</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
          <div className="discount-table">
            <h3> Discount code</h3>
            <div className="input-container">
              <div className="discount-icon">
                <AiOutlineDollar size={25}/>
              </div>
              <input type="text" placeholder="Enter promo code"></input>
              <button className="apply"> Apply coupon</button>
            </div>
          </div>
        </div>
        <div className="cart-container-right">
          <div className="cart-subcontainer-right">

            <div className="cart-right-title">Order Summary</div>
            <div className="subtotal">
              <div className="subtotal-text">Subtotal</div>
              <div className="subtotal-amount"> $252.47</div>
            </div>
            <select name="" id="" className="select-coupon">
              <option value="">Standard Shipping ($20)</option>
              <option value="">Fast Shipping ($40)</option>
            </select>
            <div className="total">
              <div className="total-text">TOTAL</div>
              <div className="total-amount">$272.47</div>
            </div>
            <button className="cart-checkout-button">PROCEED TO CHECKOUT</button>
            <div className="payment-methods-text">Accept Payment Methods</div>
            <img src={payment} alt="" />
          </div>
          <a href="#" className="continue-shopping-link">CONTINUE SHOPPING</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
