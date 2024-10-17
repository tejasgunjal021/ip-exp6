// ProgramCard.js
import React from 'react';
import './programCard.css'; // Create a separate CSS file for styling

const ProgramCard = ({ img, title, intake }) => {
    return (
        <div className='program-card'>
            <img src={img} alt={title} className='program-image' />
            <div className='caption'>
                <h3>{title}</h3>
                <div className='icon-container'>
                    <img src='../assets/icon.png' alt="icon" />
                    <p>Intake: {intake}</p>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
