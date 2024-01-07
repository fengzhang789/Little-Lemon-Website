import React from 'react'
import food from '../assets/img/call to action food.jpg'

const CallToAction = () => {
    return (
        <div className='call-to-action'>
            <div className='left-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>

            <div className='right-content'>
                <img src={food} alt='food'></img>
            </div>
        </div>
    )
}

export default CallToAction