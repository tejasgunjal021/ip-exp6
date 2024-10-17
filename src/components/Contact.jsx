import React from 'react'
import './contact.css'
import msg_icon from '../assets/msg.png';
import mail_icon from '../assets/mail.png'
import phone_icon from '../assets/contact.png'
import location_icon from '../assets/location.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a Message<img src={msg_icon} alt=""/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt=""/>vesit@ves.ac.in</li>
                <li><img src={phone_icon} alt=""/>+91-22-61532510 / 27 (Admission)</li>
                <li><img src={location_icon} alt=""/>Hashu Advani Memorial Complex, Collector’s Colony, Chembur, Mumbai – 400 074. India.</li>
            </ul>
        </div>
    <div className='contact-col'>
        <form>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>  
            <label>Write your Message Here</label>      
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit</button>
        </form>
        <span></span>
    </div>
    </div>
  )
}

export default Contact
