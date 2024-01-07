import React from 'react'
import chef from '../assets/img/chef.jpg'

const BookingPageTop = () => {
    return (
        <div className='call-to-action'>
            <div className='left-content'>
                <h1>Booking</h1>
                <h2>Reserve a Table</h2>
                <p>Reserve a table in advance at Little Lemon to skip the line! We offer special deals for special occasions!</p>
            </div>

            <div className='chef'>
                <img src={chef} alt='chef'></img>
            </div>
        </div>
    )
}

export default BookingPageTop