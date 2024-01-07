import React, {useState, useEffect} from 'react'
import Option from './Option';

const BookingForm = (props) => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday')
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState('')
    const [displayedTime, setDisplayedTime] = useState([])
    
    useEffect(() => {
        props.availableTimes && props.availableTimes.then(times => {
            setDisplayedTime(times)
        });
    }, [props.availableTimes]);

    const formSubmission = (e) => {
        e.preventDefault();
        console.log(formNotValid())

        props.submitForm({
            date: date,
            time: time,
            guests: guests,
            occasion: occasion,
            fname: fname,
            lname: lname,
            email: email,
        })
    }

    const formNotValid = () => {
        return date === null || time === null || fname === "" || lname === "" || email === ""
    }

    return (
        <div className='form-wrapper'>
            <form className='form' onSubmit={formSubmission}>
                <h2>Booking Details</h2>

                <label htmlFor="date"> Date</label><br />
                <input type='date' id='date' onChange={e => {
                    setDate(e.target.value)
                    props.dispatch(e.target.value)}}></input><br />

                <label htmlFor='time'>Time</label><br />
                <select id="time" onChange={e => setTime(e.target.value)}>
                    {displayedTime && displayedTime.map((time) => {
                        return <Option key={time} value={time}/>
                    })}
                </select><br />

                <label htmlFor='guests'># of Guests</label><br />
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setGuests(e.target.value)}/><br />

                <label htmlFor="occasion">Occasion</label><br />
                <select id="occasion" onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select><br/>

                
                <h2>Customer Information</h2>

                <label htmlFor="fname"> First Name</label><br />
                <input type='text' id='fname' onChange={e => setFname(e.target.value)}></input><br />

                <label htmlFor='lname'>Last Name</label><br />
                <input type='text' id='lname' onChange={e => setLname(e.target.value)}></input><br />

                <label htmlFor='email'>Email</label><br />
                <input type='email' id="email" onChange={e => setEmail(e.target.value)}></input><br />


                <button aria-label="On Click" type='submit' disabled={formNotValid()}>Submit</button>
            </form>
        </div>
    )
}

export default BookingForm