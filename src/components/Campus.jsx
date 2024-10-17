import React from 'react'
import './campus.css'
import gallery_0 from '../assets/gallery-0.png'
import gallery_1 from '../assets/gallery-1.png'
import gallery_2 from '../assets/gallery-2.png'
import gallery_3 from '../assets/gallery-3.png'

const Campus = () => {
  return (
    <div className='campus'> 
      <div className="gallery">
        <img src={gallery_0} alt=""/>
        <img src={gallery_1} alt=""/>
        <img src={gallery_2} alt=""/>
        <img src={gallery_3} alt=""/>
      </div>
      <buttons className='btn dark-btn'>See more here</buttons>
    </div>
  )
}

export default Campus
