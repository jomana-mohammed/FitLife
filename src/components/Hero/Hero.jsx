// 

import React, { useState, useEffect } from "react";
import "./Hero.css";
import "../Navbar/Navbar.css";
import arrorw from "../../assets/white-arrow.png";
import { Link } from "react-scroll";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.webp";

const Hero = () => {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero container">
      {/* Background slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-bg ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="hero-content">
        <h1>Push Beyond Your Limits</h1>
        <p>
          At <strong>FitLife Gym</strong>, we are more than just a fitness center, we are a community 
          committed to helping you achieve strength, confidence, and a healthier lifestyle. 
          From personalized training programs to world-class equipment and expert guidance, 
          everything you need to transform your body and mind is right here. 
        </p>
        
          <button className="btn"><Link to="program" smooth={true} offset={-250} duration={500}>
            Get Started <img src={arrorw} alt="arrow" />
            </Link>
          </button>
        
      </div>
    </div>
  );
};

export default Hero;
