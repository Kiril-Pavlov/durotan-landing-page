import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">QTY</th>
            <th scope="col">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div style={{ height: "120px" }} className="discount table ">
        <h3> Discount code</h3>
        
        <input type="text" placeholder="Enter promo code"></input>
        <button
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "none",
            position: "absolute",
            right: "0px"
          }}
          className="apply"
        >
          Apply coupon
        </button>
      </div>
    </div>
  );
};

export default Cart;
