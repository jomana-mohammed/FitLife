import './Testimonials.css';
import nextBtn from '../../assets/next-icon.png';
import backBtn from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import { useRef } from 'react';


const Testimonials = () => {

    const slider = useRef();
    let tx = 0 ;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;    
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`; 
    }

    return (
        <div className='testimonials'>
            <img src={nextBtn} alt="" className='next-btn' onClick={slideForward} />
            <img src={backBtn} alt="" className='back-btn' onClick={slideBackward} />            
            <div className='slider'>
                <ul ref={slider}>
                
                    <li>
                        <div className = "slide">
                            <div className="user-info">
                                <img src={user1} alt=""/>
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one 
                                of the best decisions I have ever made.
                                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className = "slide">
                            <div className="user-info">
                                <img src={user2} alt=""/>
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one 
                                of the best decisions I have ever made.
                                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className = "slide">
                            <div className="user-info">
                                <img src={user3} alt=""/>
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one 
                                of the best decisions I have ever made.
                                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className = "slide">
                            <div className="user-info">
                                <img src={user4} alt=""/>
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one 
                                of the best decisions I have ever made.
                                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Testimonials;
