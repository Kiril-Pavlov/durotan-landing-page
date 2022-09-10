import React from 'react'

import './OurJournal.css';

import { FaGreaterThan } from "react-icons/fa"

import post1 from "../assets/post_1.jpg"
import post2 from "../assets/post_2.jpg"

const OurJournal = () => {
  return (
    <div className='journal-container'>
      <h2 className='ourJournal'> Our Journal</h2>
      <div className='journal-content'>
        <p className="journalPara">Alway catch up the fashion trending, discover lookbook & more</p>
        <div className='all-articles-link'>
          ALL ARTICLES <FaGreaterThan />
        </div>
      </div>
      <div className='posts-container'>
        <div className='post-container'>
          <div className='post-image'>
            <img src={post1} alt="Post 1" />
          </div>
          <div className='post-content'>
            <div className='post-date'>
              <div className='post-day'>25</div>
              <div className='post-month'>December</div>
              <dir className="year">2022</dir>
            </div>
            <div className='post-author'>
              <div className='title'>How to choose a sneakers suit for any your style look impressive</div>
              <div>
                <a href="">INSPIRATION</a>  / By Admin
              </div>
            </div>
          </div>
        </div>
        
        <div className='post-container'>
          <div className='post-image'>
            <img src={post2} alt="Post 2" />
          </div>
          <div className='post-content'>
            <div className='post-date'>
              <div className='post-day'>20</div>
              <div className='post-month'>December</div>
              <dir className="year">2022</dir>
            </div>
            <div className='post-author'>
              <div className='title'>Your checkout now faster at our store with Google Pay</div>
              <div>
                <a href="">TIPPS & TRICKS</a>  / By Logan Cee
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default OurJournal