import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/program.jpg';
import gallery_2 from '../../assets/program.jpg';
import gallery_3 from '../../assets/program.jpg';
import gallery_4 from '../../assets/program.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Campus = () => {
  return (
    <div className="campus">
        <div className='gallery'>
            <img src={gallery_1} alt=""/>
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_4} alt=""/>
        </div>
        <button className='campus-btn'>See more here <FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  );
}

export default Campus;
