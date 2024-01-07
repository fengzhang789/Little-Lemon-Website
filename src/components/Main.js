import React, { useEffect, useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import BookingPage from '../pages/BookingPage'
import { fetchAPI, submitAPI } from '../api'
import ConfirmedBooking from './ConfirmedBooking'

export const initializeTimes = async () => {
    try {
        const res = await fetchAPI(new Date())
        return res;
    } catch (e) {
        return [];
    }
};

export const updateTimes = async (state, action) => {
    try {
        const res = await fetchAPI(action)
        console.log(action);
        return res;
    } catch (e) {
        return [];
    }
};

const Main = () => {
    const navigate = useNavigate();

    const submitForm = async (data) => {
        try {
            const res = await submitAPI(data);
            navigate('/confirmation')
        } catch (e) {
            console.log(e)
        }
        
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    

    return (
        <main>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/booking' element={<BookingPage submitForm={submitForm} dispatch={dispatch} availableTimes={availableTimes}/>}></Route>
                <Route path='/confirmation' element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}

export default Main