import React from "react";
import "./Search.css";
import search1 from "../../assets/search1.jpg";
import search2 from "../../assets/search2.jpg";
import search3 from "../../assets/search3.jpg";
import search4 from "../../assets/search4.jpg";
import search5 from "../../assets/search5.jpg";
const Search = ({ closeSearch, openSearchState }) => {
  if (!openSearchState) return null;
  const searchList = [
    {
      image: search1,
      text: "Double-breasted wool Tailored coat",
      price: "$56.99",
    },
    {
      image: search2,
      text: "Slim fit modal cotton shirt",
      price: "$56.99",
    },
    {
      image: search3,
      text: "Wool/Cashmera basic cardigan",
      price: "$49.5",
    },
    {
      image: search4,
      text: "Regular fit striped cotton shirt",
      price: "$79.99",
    },
    {
      image: search5,
      text: "Slim fit modal cotton shity",
      price: "$99.99",
    },
  ];
  return (
    <div className="searchPopUp">
      <button className="closeSearch" onClick={closeSearch}>
        X
      </button>
      <h3 className="title">Search</h3>

      <ul className="search">
        <li>All</li>
        <li>Clothings</li>
        <li>Shoes</li>
        <li>Bags</li>
        <li>Accessories</li>
      </ul>
      <input
        type="search"
        className="searchInput"
        placeholder="Search here ..."
          ></input>
          <h3 className="sub-title">Search Results</h3>
      <div className='cards-container'>
        {searchList.map((item) => {
          return (
            <div className="cardItem" key={item.text}>
              <img src={item.image} alt="slika" />
              <p>{item.text}</p>
              <span>{item.price}</span>
            </div>
          );
        })}
          </div>
          <button className="popUpBtn">ALL RESULTS (12)</button>
    </div>
  );
};

export default Search;
