import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import BookingPage from '../pages/BookingPage'

export const initializeTimes = () => ['17:00'];
export const updateTimes = (state, action) => ['17:00', '18:00', '19:00'];

const Main = () => {

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