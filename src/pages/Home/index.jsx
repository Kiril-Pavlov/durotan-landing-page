import React, { useState } from 'react'

import {AiOutlinePlayCircle} from 'react-icons/ai'
import "./Home.css"

const Home = () => {

  const [activeSlide, setActiveSlide] = useState("1")

  const decrementSliderState = () => {
    let activeSlideInt = Number(activeSlide);
    if (activeSlideInt !== 1) {
      setActiveSlide(String(activeSlideInt - 1))
    } else {
      setActiveSlide("1")
    }
  }

  const incrementSliderState = () => {
    let activeSlideInt = Number(activeSlide);
    if (activeSlideInt !== 3) {
      setActiveSlide(String(activeSlideInt + 1))
    } else {
      setActiveSlide("3")
    }
  }

  return (
    <div className='home-container'>
      <div className='carousel-container'>
        {activeSlide === "1" ? (
          <div className='carousel-1-container'>
            <h4 className='small-subtitle'>NEW ARRIVAL</h4>
            <h2 className='carousel-title'>Basic Colours Comeback</h2>
            <p className='carousel-paragraph'>Less is more never out of date. In last of theese years, basic colours will comeback, discover our collections and choose your style</p>
            <div className='carousel-1-buttons'>
              <button className='carousel-1-button'>SHOP NOW</button>
              <div className='play-button'><AiOutlinePlayCircle /> <span>VIEW LOOKBOOK</span> </div>
            </div>
            <button onClick={decrementSliderState}>PREV</button>
            <button onClick={incrementSliderState}>NEXT</button>
          </div>
        ) : activeSlide === "2" ? (
          <div>Slider 2
            <button onClick={decrementSliderState}>PREV</button>
            <button onClick={incrementSliderState}>NEXT</button>
          </div>
        ) : activeSlide === "3" ? (
          <div>Slider 3
            <button onClick={decrementSliderState}>PREV</button>|
            <button onClick={incrementSliderState}>NEXT</button>
          </div>
        ) : null
        }
      </div>
    </div>
  )
}

export default Home