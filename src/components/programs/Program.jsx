import React from 'react'
import './Program.css'
import program from '../../assets/program.jpg' // Assuming you have a program image in the assets folder

const Program = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={program} alt='Program 1' />
                <div className='caption'>
                    <img src=''/>
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={program} alt='Program 2' />
                <div className='caption'>
                    <img src=''/>
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={program} alt='Program 3' />
                <div className='caption'>
                    <img src=''/>
                    <p>Graduation Degree</p>
                </div>
            </div>
        </div>
    )
}

export default Program
