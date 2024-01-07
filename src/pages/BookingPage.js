import React from 'react'
import BookingPageTop from '../components/BookingPageTop'
import BookingForm from '../components/BookingForm'

const BookingPage = (props) => {
    return (
        <>
            <BookingPageTop />
            <BookingForm submitForm={props.submitForm} dispatch={props.dispatch} availableTimes={props.availableTimes}/>
        </>
    )
}

export default BookingPage