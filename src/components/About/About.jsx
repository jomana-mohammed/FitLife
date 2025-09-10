import React from 'react';
import './About.css';
import aboutImg from '../../assets/FitLife_about.png';
import playIcon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={aboutImg} alt="About FitLife" className='about-img' />
                <img 
                    src={playIcon} 
                    className='play-icon' 
                    alt="Play Video" 
                    onClick={() => { setPlayState(true) }} 
                />
            </div>
            <div className='about-right'>
                <h3>ABOUT FITLIFE</h3>
                <h2>Building Strength, Health & Confidence</h2>
                <p>
                    At FitLife, we believe fitness is more than just exercise — it’s a lifestyle. 
                    Our mission is to help you unlock your full potential by combining expert 
                    training, modern equipment, and a supportive community. 
                </p>

                <p>
                    From yoga and flexibility training to high-intensity cardio and strength building, 
                    our programs are designed to fit every fitness journey, no matter your level. 
                    With guidance from certified trainers, you’ll find the perfect balance of challenge 
                    and motivation to push beyond your limits.
                </p>

                <p>
                    Whether your goal is to lose weight, build muscle, or simply live a healthier life, 
                    FitLife is here to guide you every step of the way. Together, let’s make fitness 
                    your lifestyle.
                </p>
            </div>
        </div>
    );
}

export default About;
