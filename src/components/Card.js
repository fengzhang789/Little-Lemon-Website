import React from 'react'
import bicycle from '../assets/img/bicycle.svg'

const Card = (props) => {
    return (
        <div className='specials-container'>
            <img className='food-img' src={props.image} alt='card' />

            <div className='content'>
                <div className='horizontal'>
                    <h3>{props.dish}</h3>
                    <p>{props.price}</p>
                </div>
                
                <div className='lower-half'>
                    <p>
                        {props.description} 
                    </p>

                    <div className='order'>
                        <p>Order a delivery</p>
                        <div className='bicycle'>
                            <img  src={bicycle} alt='bicycle icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card