import React from 'react'
import '../components/Carousel.css'
import deadlift from '../assets/deadlift.jpg'


/* const image = ["deadlift.jpg"] */

const Carousel = () => {
    return (
    <div className='img-container'>
        <img src={deadlift}/>
    </div>
    
    
    )
}

export default Carousel;