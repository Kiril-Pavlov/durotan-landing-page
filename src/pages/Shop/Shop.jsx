import React from 'react'
import { Link } from 'react-router-dom'

import shop1 from "../../assets/shop1.webp"
import shop2 from "../../assets/shop2.webp"
import shop3 from "../../assets/shop3.webp"
import shop4 from "../../assets/shop4.webp"
import shop5 from "../../assets/shop5.webp"
import shop6 from "../../assets/shop6.jpg"

import { ImEqualizer } from "react-icons/im"
import { BiGridAlt } from "react-icons/bi"
import { RiListCheck2 } from "react-icons/ri"
import { IoIosExpand } from "react-icons/io"
import { BsHeart } from "react-icons/bs"
import { IoIosGitCompare } from "react-icons/io"

import "./Shop.css"
import { useState } from 'react'

const Shop = () => {
  const [displayView, setDisplayView] = useState("grid");
  

  const handleDisplayGrid = () => {
    setDisplayView("grid")
  }

  const handleDisplayList = () => {
    setDisplayView("list")
  }



  const productList = [
    {
      img: shop1,
      name: "Simple text for name product",
      price: "$59.50",
      description: "Casual line. Short design. 100% suede leather. Backstitched elbow patche"
    },
    {
      img: shop2,
      name: "Simple text for name product",
      price: "$59.50",
      description: "Casual line. Short design. 100% suede leather. Backstitched elbow patche"
    },
    {
      img: shop3,
      name: "Simple text for name product",
      price: "$59.50",
      description: "Casual line. Short design. 100% suede leather. Backstitched elbow patche"
    },
    {
      img: shop4,
      name: "Simple text for name product",
      price: "$59.50",
      description: "Casual line. Short design. 100% suede leather. Backstitched elbow patche"
    },
    {
      img: shop5,
      name: "Simple text for name product",
      price: "$59.50",
      description: "Casual line. Short design. 100% suede leather. Backstitched elbow patche"
    },
    {
      img: shop4,
      name: "Simple text for name product",
      price: "$59.50",
      description: "Casual line. Short design. 100% suede leather. Backstitched elbow patche"
    }
  ]
  return (
    <div className='shop-container'>
      <div className='shop-route'>
        <Link to="/">
          HOME
        </Link>
        <div className='endpoint'>
          / SHOP
        </div>
      </div>
      <h2 className='shop-title'>
        Shop
      </h2>
      <div className='shop-filter'>
        <div className='shop-filter-left'>
          <div className='filter-button'>
            <ImEqualizer /> FILTER
          </div>
          <div className='selected-filters'>
            <div className='selected-filter'>
              Brown X
            </div>
            <div className='selected-filter'>
              XXL X
            </div>
            <div className='selected-filter'>
              From $100 X
            </div>
          </div>
        </div>
        <div className='shop-filter-right'>
          <select name="" id="" className='shop-dropdown'>
            <option value="">POPULARITY</option>
            <option value="">FEATURED</option>
            <option value="">PRICE</option>
            <option value="">DEFAULT</option>
          </select>
          <div className='shop-filter-icons'>
            <BiGridAlt onClick={handleDisplayGrid} />
            <RiListCheck2 onClick={handleDisplayList} />
          </div>
        </div>
      </div>
      <p>6 Products found</p>

      {displayView === "grid" ? (
        <div className='grid-products-container'>
          {productList.map((item) => {
            return (
              <div className='grid-product-card'>
                <div className='grid-product-img'>
                  <img src={item.img} alt={item.name} />
                  <div className='grid-product-controls'>
                    <button>ADD TO CART</button>
                    <div className='grid-product-icons'>
                      <IoIosExpand />
                      <BsHeart />
                      <IoIosGitCompare />
                    </div>
                  </div>
                </div>
                <h3>{item.name}</h3>
                <div>{item.price}</div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className='list-products-container'>
          {productList.map((item) => {
            return (
              <div className='list-product-card'>
                <div className='list-product-img'>
                  <img src={item.img} alt={item.name} />
                  <div className='list-product-icons'>
                    <IoIosExpand />
                    <BsHeart />
                    <IoIosGitCompare />
                  </div>
                </div>
                <div className='list-product-content'>
                  <h3 className='list-product-title'>{item.name}</h3>
                  <div className='list-product-price'>{item.price}</div>
                  <div className='list-product-description'>{item.description}</div>
                  <button className='list-product-button'>ADD TO CART</button>
                </div>
              </div>
            )
          })}
        </div>
      )
      }

    </div>
  )
}

export default Shop