import React from 'react'
import salad from '../assets/img/greek salad.jpg'
import bruchetta from '../assets/img/bruchetta.svg'
import lemon from '../assets/img/lemon dessert.jpg'
import Card from './Card'

const Specials = () => {
    const dishDetails = [
        {
            dish: "Greek Salad",
            price: "$12.99",
            image: salad,
            description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        },
        {
            dish: "Bruchetta",
            price: "$5.99",
            image: bruchetta,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            dish: "Lemon Dessert",
            price: "$5.00",
            image: lemon,
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]

    return (
        <div className='specials'>
            <div className='top'>
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>
            
            <div className='bottom'>
               {dishDetails.map((dish) => {
                    return (
                        <Card key={dish.dish} image={dish.image} dish={dish.dish} price={dish.price} description={dish.description} />
                    )
               })}
            </div>
        </div>
    )
}

export default Specials