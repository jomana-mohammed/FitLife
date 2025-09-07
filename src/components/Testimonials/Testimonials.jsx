import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <FontAwesomeIcon icon={faForward} className="next-btn" />
            <FontAwesomeIcon icon={faBackward} className="back-btn" />
            <div className='slider'>
                <ul>
                    <li>
                        <div className = "slide">
                            <div className="user-info">
                                <img src="" alt=""/>
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
