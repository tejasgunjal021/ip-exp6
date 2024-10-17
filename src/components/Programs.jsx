import React from 'react';
import './programs.css';
import program_1 from '../assets/program-1.png';
import program_2 from '../assets/iot.jpg';
import program_3 from '../assets/ai.jpg';
import program_4 from '../assets/mechanics.jpg';
import program_5 from '../assets/electronics.jpg';
import program_6 from '../assets/robotics.jpg';
import icon from '../assets/icon.png'

const Programs = () => {
    return (
        <div className='programs-container'>
            <div className='programs'>
                <div className='program'>
                    <img src={program_1} alt="Program 1" />
                    <div className='caption'>
                        <img src={icon} alt="icon"  />
                        <p>Intake:- 180 Seats</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={program_2} alt="IOT" />
                    <div className='caption'>
                        <img src={icon} alt="icon" />
                        <p>Intake:- 180 Seats</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={program_3} alt="AI"  />
                    <div className='caption'>
                        <img src={icon} alt="icon" />
                        <p>Intake:- 180 Seats</p>
                    </div>
                </div>
            </div>
            <div className='programs'>
                <div className='program'>
                    <img src={program_4} alt="Mechanics" />
                    <div className='caption'>
                        <img src={icon} alt="icon" />
                        <p>Intake:- 180 Seats</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={program_5} alt="Electronics" />
                    <div className='caption'>
                        <img src={icon} alt="icon" />
                        <p>Intake:- 180 Seats</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={program_6} alt="Robotics" />
                    <div className='caption'>
                        <img src={icon} alt="icon" />
                        <p>Intake:- 180 Seats</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
