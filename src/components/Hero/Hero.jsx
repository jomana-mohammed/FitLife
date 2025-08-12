import React from 'react'
import './Hero.css'
import '../Navbar/Navbar.css' 
import arrorw from '../../assets/right-arrow.png' // Assuming you have an arrow image in the assets folder

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-content'>
        <h1>Welcome to EduTech</h1>
        <p>Your journey to knowledge starts here Your journey to knowledge starts hereYour journey to knowledge starts hereYour journey to knowledge starts hereYour journey to knowledge starts here</p>
        <button className='btn'>Get Started <img src={arrorw} style={{width:"20px", height:"20px" , marginLeft:"5px"}}/></button>
      </div>
    </div>
  )
}

export default Hero
