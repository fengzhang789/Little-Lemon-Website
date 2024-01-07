import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import BookingPage from '../pages/BookingPage'

const Main = () => {


    // UPDATES THE AVAILABLE TIMES STATE
    const updateTimes = (state, action) => {
        console.log('rrun')
        return ['17:00', '18:00', '19:00'];
    }

    // Initial Times Available
    const initializeTimes = () => {
        return ['17:00']
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return (
        <main>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/booking' element={<BookingPage dispatch={dispatch} availableTimes={availableTimes}/>}></Route>
            </Routes>
        </main>
    )
}

export default Main