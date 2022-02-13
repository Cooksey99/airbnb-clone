import { csrfFetch } from "./csrf";

const CREATE_BOOKING = 'booking/create-booking';
const LOAD_BOOKINGS = 'booking/load-bookings';
const DELETE_BOOKING = 'booking/delete-booking'

const deleteBooking = (booking) => {
    return {
        type: DELETE_BOOKING,
        payload: booking
    }
}
export const fetchDeleteBooking = (booking) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookg/${booking.id}`, {
        method: 'delete'
    });
    if (response.ok) dispatch(deleteBooking(response))
}

const loadBookings = (bookings) => {
    return {
        type: LOAD_BOOKINGS,
        payload: bookings
    }
}
export const fetchBookings = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/booking/${userId}`);
    const data = await response.json();

    dispatch(loadBookings(data));
    // console.log(response)
    return response;
}

const addBooking = (booking) => {
    return {
        type: CREATE_BOOKING,
        payload: booking
    }
}

export const createBooking = (inputInfo) => async (dispatch) => {
    const response = await csrfFetch('/api/booking', {
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

export default function bookingsReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case LOAD_BOOKINGS:
            newState = {};
            action.payload.forEach(spot => newState[spot.id] = spot);
            console.log('here is the state: ' + newState[1].startDate);
            return newState;
        case CREATE_BOOKING:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_BOOKING:
            newState = {...state}
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}
