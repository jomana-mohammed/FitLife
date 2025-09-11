// import './Testimonials.css';
// import nextBtn from '../../assets/next-icon.png';
// import backBtn from '../../assets/back-icon.png';
// import user1 from '../../assets/user-1.png';
// import user2 from '../../assets/user-2.png';
// import user3 from '../../assets/user-3.png';
// import user4 from '../../assets/user-4.png';
// import { useRef } from 'react';

// const Testimonials = () => {
//     const slider = useRef();
//     let tx = 0;

//     const slideForward = () => {
//         if (tx > -50) {
//             tx -= 25;
//         }
//         slider.current.style.transform = `translateX(${tx}%)`;
//     };

//     const slideBackward = () => {
//         if (tx < 0) {
//             tx += 25;
//         }
//         slider.current.style.transform = `translateX(${tx}%)`;
//     };

//     return (
//         <div className='testimonials'>
//             <img src={nextBtn} alt="" className='next-btn' onClick={slideForward} />
//             <img src={backBtn} alt="" className='back-btn' onClick={slideBackward} />            
//             <div className='slider'>
//                 <ul ref={slider}>
                
//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user1} alt=""/>
//                                 <div>
//                                     <h3>Emma Wilson</h3>
//                                     <span>Yoga & Flexibility Member</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 Joining FitLife’s yoga program has been amazing. 
//                                 I feel more flexible, balanced, and less stressed. 
//                                 The trainers create such a calming atmosphere that makes 
//                                 every session feel refreshing and energizing.
//                             </p>
//                         </div>
//                     </li>

//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user2} alt=""/>
//                                 <div>
//                                     <h3>James Carter</h3>
//                                     <span>Weight Training Enthusiast</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 FitLife helped me push past my limits. 
//                                 With structured weight training plans, I’ve gained muscle 
//                                 and improved my overall strength. The supportive trainers 
//                                 keep me motivated to achieve my fitness goals.
//                             </p>
//                         </div>
//                     </li>

//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user3} alt=""/>
//                                 <div>
//                                     <h3>Sophia Martinez</h3>
//                                     <span>Cardio Training Member</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 The cardio workouts at FitLife are fun yet challenging. 
//                                 I’ve boosted my stamina, lost weight, and feel healthier every day. 
//                                 I love the group sessions — the energy is contagious!
//                             </p>
//                         </div>
//                     </li>

//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user4} alt=""/>
//                                 <div>
//                                     <h3>David Johnson</h3>
//                                     <span>Nutrition & Wellness Program</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 FitLife’s nutrition and wellness program gave me a new lifestyle. 
//                                 I learned how to eat smart while staying consistent in the gym. 
//                                 Now I feel more energized, healthier, and more confident in my daily life.
//                             </p>
//                         </div>
//                     </li>

//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Testimonials;



import './Testimonials.css';
import nextBtn from '../../assets/next-icon.png';
import backBtn from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={nextBtn} alt="" className='next-btn' onClick={slideForward} />
            <img src={backBtn} alt="" className='back-btn' onClick={slideBackward} />            
            <div className='slider'>
                <ul ref={slider}>
                
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt=""/>
                                <div>
                                    <h3>Emma Wilson</h3>
                                    <span>Yoga & Flexibility Member</span>
                                </div>
                            </div>
                            <p>
                                Joining FitLife’s yoga program has been amazing. 
                                I feel more flexible, balanced, and less stressed. 
                                The trainers create such a calming atmosphere that makes 
                                every session feel refreshing and energizing.
                            </p>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star" />
                                ))}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt=""/>
                                <div>
                                    <h3>James Carter</h3>
                                    <span>Weight Training Enthusiast</span>
                                </div>
                            </div>
                            <p>
                                FitLife helped me push past my limits. 
                                With structured weight training plans, I’ve gained muscle 
                                and improved my overall strength. The supportive trainers 
                                keep me motivated to achieve my fitness goals.
                            </p>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star" />
                                ))}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt=""/>
                                <div>
                                    <h3>Sophia Martinez</h3>
                                    <span>Cardio Training Member</span>
                                </div>
                            </div>
                            <p>
                                The cardio workouts at FitLife are fun yet challenging. 
                                I’ve boosted my stamina, lost weight, and feel healthier every day. 
                                I love the group sessions — the energy is contagious!
                            </p>
                            <div className="stars">
                                {[...Array(4)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star" />
                                ))}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt=""/>
                                <div>
                                    <h3>David Johnson</h3>
                                    <span>Nutrition & Wellness Program</span>
                                </div>
                            </div>
                            <p>
                                FitLife’s nutrition and wellness program gave me a new lifestyle. 
                                I learned how to eat smart while staying consistent in the gym. 
                                Now I feel more energized, healthier, and more confident in my daily life.
                            </p>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star" />
                                ))}
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
