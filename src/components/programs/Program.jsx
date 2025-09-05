import React from 'react'
import './Program.css'
import program from '../../assets/program.jpg' // Assuming you have a program image in the assets folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'



const Program = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={program} alt='Program 1' />
                <div className='caption'>
                    <FontAwesomeIcon className='icon' icon={faGraduationCap} />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={program} alt='Program 2' />
                <div className='caption'>
                    <FontAwesomeIcon className='icon' icon={faGraduationCap} />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={program} alt='Program 3' />
                <div className='caption'>
                    <FontAwesomeIcon className='icon' icon={faGraduationCap} />
                    <p>Graduation Degree</p>
                </div>
            </div>
        </div>
    )
}

export default Program
