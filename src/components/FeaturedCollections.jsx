import React from 'react'

import "./FeaturedCollections.css"

import product1 from "../assets/featured_product_1.png";
import product2 from "../assets/featured_product_2.png";

const FeaturedCollections = () => {
    return (
        <div>
            <div className="featuredCollections">
                <h4 className="featured-title">Featured Collections</h4>
                <p className="featuredPara">
                    New arrivals, best seling or any discount programs, click on any
                    collection that you’re looking for
                </p>
            </div>
            <div className='featured-products'>
                <div className="featured-product">
                    <h4 className="featured-product-small-title">COATS & JACKETS</h4>
                    <div className="featured-product-title">BASIC JACKETS</div>
                    <p className="featured-product-paragraph">
                        Simple alway is the best choice for your any style. Check our lookbook
                    </p>
                    <div className="featured-product-image">
                        <img src={product1} />
                    </div>
                    <button className="explore">EXPLORE NOW</button>
                </div>
                <div className="featured-product">
                    <h4 className="featured-product-small-title">ACCESSORIES</h4>
                    <div className="featured-product-title">ATHLETIC CREW</div>
                    <p className="featured-product-paragraph">
                        Inspiration from Athletic Crew - College Division, A brown cap for
                        youngs
                    </p>
                    <div className="featured-product-image-2">
                        <img src={product2} />
                    </div>
                    <button className="explore">EXPLORE NOW</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCollections