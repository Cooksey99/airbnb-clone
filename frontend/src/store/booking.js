import { csrfFetch } from "./csrf";

const CREATE_BOOKING = 'booking/create-booking';
const LOAD_BOOKINGS = 'booking/load-bookings';

const loadBookings = (bookings) => {
    return {
        type: CREATE_BOOKING,
        payload: bookings
    }
}

const addBooking = (booking) => {
    return {
        type: CREATE_BOOKING,
        payload: booking
    }
}

export const createBooking = (inputInfo) => async (dispatch) => {
    const response = await csrfFetch('/api/bookings', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputInfo)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(addBooking(data));
        return data;
    }
}

export default function spotsReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case CREATE_BOOKING:
            newState = {...state};
            newState[action.booking.id] = action.booking;
            return newState;
        default:
            return state;
    }
}
