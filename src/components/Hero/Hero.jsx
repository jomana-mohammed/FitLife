import React from 'react'
import './Hero.css'
import '../Navbar/Navbar.css' 
import arrorw from '../../assets/white-arrow.png' // Assuming you have an arrow image in the assets folder

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-content'>
        <h1>Transform Your Body, Transform Your Life</h1>
        <p>
          Join FitLife today and unlock your full potential with expert-led 
          programs in Yoga, Cardio, Strength Training, and Nutrition. 
          Your fitness journey starts here, stronger, healthier, and more confident than ever.
        </p>
        <button className='btn'>Get Started <img src={arrorw}/></button>
      </div>
    </div>
  )
}

export default Hero
