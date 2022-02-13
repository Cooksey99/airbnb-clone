import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createBooking } from '../../store/booking';

export const SetBooking = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    function DatePicker() {
        const sessionUser = useSelector(state => state.session.user.id);
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());

        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: 'selection'
        };

        function handleSelect(ranges) {
            setStartDate(ranges.selection.startDate);
            setEndDate(ranges.selection.endDate);
            console.log('start:     ' + startDate);
            console.log('end:       ' + endDate);
            console.log('userId:        ' + sessionUser)
            console.log('spotId:        ' + id)
        }

        // sends the information to the backend
        const handleSubmit = async (e) => {
            e.preventDefault();

            let formData = {
                userId: sessionUser,
                spotsId: id,
                startDate,
                endDate
            }
            console.log('formData:      ' + formData);
            await dispatch(createBooking(formData));
            // if (newBook) {

            // }

        }

        return (
            <>
                <div id="date-picker">
                    <DateRangePicker ranges={
                        [selectionRange]
                    } onChange={handleSelect}/>
                </div>
                <form
                onSubmit={handleSubmit}
                >
                    <button
                    // onClick={() => handleSubmit()}
                    >TEST</button>

                </form>
            </>
        )
    }

    return (
        <>
            <DatePicker />
        </>
    )

}
