import React from "react";
import "./Cart.css";
import cart1 from "../../assets/cart1.jpg";
import cart2 from "../../assets/cart2.jpg";
import cart3 from "../../assets/cart3.jpg";
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
      <div style={{ height: "120px" }} className="discount table ">
        <h3> Discount code</h3>

        <input type="text" placeholder="Enter promo code"></input>
        <button
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "none",
            position: "absolute",
            right: "0px",
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
