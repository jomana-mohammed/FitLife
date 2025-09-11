// 

import React, { useState, useEffect } from "react";
import "./Hero.css";
import "../Navbar/Navbar.css";
import arrorw from "../../assets/white-arrow.png";
import { Link } from "react-scroll";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";

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
        <h1>Welcome to FitLife Gym</h1>
        <p>Transform your body, mind, and lifestyle with us.</p>
        <Link to="programs" smooth={true} duration={500}>
          <button className="btn">
            Get Started <img src={arrorw} alt="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
