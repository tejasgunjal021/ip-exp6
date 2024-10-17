import React, { useRef, useState } from 'react';
import './testimonials.css';
import next_icon from '../assets/right-arrow.png';
import back_icon from '../assets/left-arrow.png';
import user_1 from '../assets/user1.png';
import user_2 from '../assets/user2.png';
import user_3 from '../assets/user3.png';
import user_4 from '../assets/user4.png';
import user_5 from '../assets/user5.png';
import user_6 from '../assets/user6.png';


const Testimonials = () => {
  const slider = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      img: user_1,
      name: 'Aarav Mehta',
      place: 'Mumbai, Maharashtra',
      feedback: 'Studying at VESIT has been an incredible experience! The faculty is supportive and the learning environment is inspiring.'
    },
    {
      img: user_2,
      name: 'Sanya Kapoor',
      place: 'Thane, Maharashtra',
      feedback: 'VESIT has made my academic journey smooth and enjoyable. The resources available are top-notch and very helpful!'
    },
    {
      img: user_3,
      name: 'Rohan Verma',
      place: 'Navi Mumbai, Maharashtra',
      feedback: 'I highly recommend VESIT! The curriculum is well-structured, and the campus facilities are excellent.'
    },
    {
      img: user_4,
      name: 'Diya Sharma',
      place: 'Pune, Maharashtra',
      feedback: 'The support from faculty at VESIT is exceptional. They are always there to help and guide students effectively.'
    },
    {
      img: user_5,
      name: 'Kabir Singh',
      place: 'Aurangabad, Maharashtra',
      feedback: 'VESIT provides great value for education. The programs are comprehensive and equip us with the skills needed in the industry.'
    },
    {
      img: user_6,
      name: 'Ali Khan',
      place: 'Nagpur, Maharashtra',
      feedback: 'My experience at VESIT has been smooth and enriching. I look forward to applying what I havve learned in my career!'
    }
  ];
  
  const slideForward = () => {
    if (currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 2);
      slider.current.style.transform = `translateX(-${(currentIndex + 2) * 50}%)`;
    }
  };

  const slideBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
      slider.current.style.transform = `translateX(-${(currentIndex - 2) * 50}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <div className='slider'>
        <ul ref={slider}>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <div className='slide'>
                <div className='user-info'>
                  <img src={testimonial.img} alt={testimonial.name} className='user-img' />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.place}</span>
                  </div>
                </div>
                <p>{testimonial.feedback}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
