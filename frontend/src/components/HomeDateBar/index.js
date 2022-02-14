import React, { useState } from "react";
import './HomeDateBar.css'
import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
import { SetBooking } from "../Bookings/SetBooking";

export default function HomeDateBar() {

    // function DatePicker() {
    //     const [startDate, setStartDate] = useState(new Date());
    //     const [endDate, setEndDate] = useState(new Date());

    //     const selectionRange = {
    //         startDate: startDate,
    //         endDate: endDate,
    //         key: 'selection'
    //     };

    //     function handleSelect(ranges) {
    //         setStartDate(ranges.selection.startDate);
    //         setEndDate(ranges.selection.endDate);
    //     }
    //     return (
    //         <div id="date-picker">
    //             <DateRangePicker ranges={
    //                 [selectionRange]
    //             } onChange={handleSelect}/>
    //         </div>
    //     )
    // }

    const [dateButton, setDateButton] = useState(false)
    const buttonClick = () => {
        return setDateButton(!dateButton);
    }

    return (
        <>
            <section id="date-bar">
                <div>
                    <label>Location</label>
                    <input className="location"></input>
                </div>
                <div>
                    <button className="date-button"
                    onClick={buttonClick}>
                        <p>Check in</p>
                        <p>Add dates</p>
                    </button>
                </div>
                <div>
                    <button className="date-button"
                    onClick={buttonClick}>
                        <p>Check out</p>
                        <p>Add dates</p>
                    </button>
                </div>
                <div>
                    <label>Guests</label>
                    <select
                    className="guests">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                    </select>
                </div>
            </section>
            {dateButton && (
                <div id="date-select">
                    <SetBooking />
                </div>
            )}
        </>
    )
}
