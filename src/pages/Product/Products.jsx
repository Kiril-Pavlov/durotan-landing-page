import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Img } from "react-bootstrap";

import "./Product.css";
import prva from "../../assets/prva.webp";
import vtora from "../../assets/vtora.webp";
import treta from "../../assets/treta.webp";
import cetvrta from "../../assets/cetvrta.webp";
import outfit1 from "../../assets/outfit1.jpg";
import outfit2 from "../../assets/outfit2.jpg";
import shop1 from "../../assets/shop1.webp";
import shop2 from "../../assets/shop2.webp";
import shop3 from "../../assets/shop3.webp";
import shop4 from "../../assets/shop4.webp";
import shop5 from "../../assets/shop5.webp";
import { BsHeart } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { RiTShirt2Line } from "react-icons/ri";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
const Products = () => {
  const [imageChange, setImageChange] = useState("first");
  function changeImage1() {
    setImageChange("first");
  }
  function changeImage2() {
    setImageChange("second");
  }
  function changeImage3() {
    setImageChange("third");
  }
  function changeImage4() {
    setImageChange("forth");
  }
  const productList = [
    {
      img: shop1,
      name: "Simple text for name product",
      price: "$59.50",
      discount: "$49.50",
    },
    {
      img: shop2,
      name: "Simple text for name product",
      price: "$59.50",
    },
    {
      img: shop3,
      name: "Simple text for name product",
      price: "$59.50",
      discount: "$49.50",
    },
    {
      img: shop1,
      name: "Simple text for name product",
      price: "$59.50",
    },
    {
      img: shop2,
      name: "Simple text for name product",
      price: "$59.50",
      discount: "$49.50",
    },
  ];

  return (
    <div className="product-container">
      <div className="product-links">
        <Link to="/">HOME</Link>
        <div className="justProduct">/ PRODUCT</div>
        <p>/ PRODUCT NAME</p>
      </div>
      <div className="prevNext">
        <div className="prev">PREV</div>
        <div className="next">NEXT</div>
      </div>
      <div className="selectProductDetails">
        <div className="leftPart">
          <CardGroup className="card-group">
            <Card>
              <Card.Img
                className="defaultImg first"
                onClick={changeImage1}
                variant="top"
                src={prva}
              />
            </Card>

            <Card>
              <Card.Img
                className="hoverMe second"
                onClick={changeImage2}
                variant="top"
                src={vtora}
              />
            </Card>

            <Card>
              <Card.Img
                className="hoverMe third"
                onClick={changeImage3}
                variant="top"
                src={treta}
              />
            </Card>
            <Card>
              <Card.Img
                className="hoverMe forth"
                onClick={changeImage4}
                variant="top"
                src={cetvrta}
              />
            </Card>
          </CardGroup>
          <img
            className="original"
            src={
              imageChange === "first"
                ? prva
                : imageChange === "second"
                ? vtora
                : imageChange === "third"
                ? treta
                : cetvrta
            }
          />
        </div>
        <div className="rightPart">
          <p style={{ color: "var(--gray-color)", textAlign: "left" }}>
            WASHABLE
          </p>
          <h2>Simple text for name product</h2>
          <div className="stars">
            <i class="bi bi-star" style={{ color: "orange" }}></i>
            <i class="bi bi-star" style={{ color: "orange" }}></i>
            <i class="bi bi-star" style={{ color: "orange" }}></i>
            <i class="bi bi-star" style={{ color: "orange" }}></i>
            <i class="bi bi-star" style={{ color: "gray" }}></i>
            <p style={{ color: "var(--gray-color)", margin: "0px" }}>
              3 reviews
            </p>
          </div>
          <span style={{ fontSize: "36px" }}>$69.99</span>
          <div className="status">
            Status:<span style={{ color: "#690" }}>In stock</span>
          </div>
          <div className="colorPicker">
            <div className="parentColorSelector">
              <div className="pink"></div>
              <div className="green"></div>
              <div className="black"></div>
              <div className="red"></div>
            </div>
            <p className="brown">
              Color: <span style={{ color: "black" }}>Brown</span>
            </p>
          </div>
          <select className="select">
            <option value="1">Brown S</option>
            <option value="2">Brown M</option>
            <option value="3">Brown L</option>
            <option value="4">Brown XL</option>
          </select>
          <div className="qnt">
            <div className="counter">
              <button>-</button>
              <input type="text" value="1"></input>
              <button>+</button>
            </div>
            <div>
              {/* <button className="cart" onClick={addToCart}>ADD TO CART</button> */}
            </div>
          </div>
          <button style={{ width: "100%", position: "relative", top: "0px" }}>
            BUY NOW
          </button>
          <div className="selectInstructions">
            <div className="selectInstruction">
              <BsHeart /> ADD TO WISH LIST
            </div>
            <div className="selectInstruction">
              <IoIosGitCompare />
              COMPARE
            </div>
            <div className="selectInstruction_">
              <RiTShirt2Line />
              SIZE GUIDE
            </div>
          </div>
          <div className="productInfo">
            <div className="productInfoCol">
              <div>SKU</div>
              <div>CATEGORY</div>
              <div>TAGS</div>
            </div>
            <div className="productInfoColumn">
              <div>SS-501</div>
              <div>Men’s Clothing</div>
              <div>shirt, men, basic, cotton</div>
            </div>
          </div>
          <div className="socialIcons">
            <a href="https://twitter.com">
              <FiTwitter />
            </a>
            <a href="https://facebook.com">
              <FiFacebook />
            </a>
            <a href="https://instagram.com">
              <FiInstagram />
            </a>{" "}
          </div>
          <div className="inline">
            <div className="question"> DESCRIPTION</div>
            <div className="question">SHIP & RETURN</div>
            <div className="question">REVIEW (3)</div>
            <div className="question">ASK A QUESTION</div>
          </div>
        </div>
      </div>
      <div>
        <h2>COMPLETE YOUR OUTFIT</h2>
        <div className="outfit">
          <div className="outfitCart">
            <img src={outfit1} />
            <p>Double-breasted wool Tailored coat</p>
            <p>$56.99</p>
          </div>
          <div className="outfitCart">
            <img src={outfit2} />
            <p>Slim fit modal cotton shirt</p>
            <p>$59.99</p>
          </div>
        </div>
      </div>
      <div className="relatedProducts">
        <h2>Related Products</h2>
        <div className="grid-products-container">
          {productList.map((item) => {
            return (
              <div className="grid-product-card">
                <div className="grid-product-img">
                  <img className="imgItem" src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <div className="discount">{item.discount}</div>
                <div className="price">{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="reviewProducts">
        <h2>Recently Viewed</h2>
        <div className="grid-products-container">
          {productList.map((item) => {
            return (
              <div className="grid-product-card">
                <div className="grid-product-img">
                  <img className="imgItem" src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>

                <div className="pricee">{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
 
    </div>
  );
};
export default Products;
