import './Program.css'
import yogaImg from '../../assets/yoga.jpg'   // Replace with actual yoga image
import cardioImg from '../../assets/cardio.jpg' // Replace with actual cardio image
import weightImg from '../../assets/weight.jpeg' // Replace with actual weight training image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faHeartbeat, faPersonPraying } from '@fortawesome/free-solid-svg-icons'

const Program = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={yogaImg} alt='Yoga Program' />
                <div className='caption'>
                    <FontAwesomeIcon className='icon' icon={faPersonPraying} />
                    <p>Yoga & Flexibility</p>
                </div>
            </div>

            <div className='program'>
                <img src={cardioImg} alt='Cardio Program' />
                <div className='caption'>
                    <FontAwesomeIcon className='icon' icon={faHeartbeat} />
                    <p>Cardio & Endurance</p>
                </div>
            </div>

            <div className='program'>
                <img src={weightImg} alt='Weight Training Program' />
                <div className='caption'>
                    <FontAwesomeIcon className='icon' icon={faDumbbell} />
                    <p>Strength Training</p>
                </div>
            </div>
        </div>
    )
}

export default Program
