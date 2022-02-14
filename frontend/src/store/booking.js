import { csrfFetch } from "./csrf";

const CREATE_BOOKING = 'booking/create-booking';
const LOAD_BOOKINGS = 'booking/load-bookings';
const DELETE_BOOKING = 'booking/delete-booking'

const deleteBooking = (bookId) => {

    return {
        type: DELETE_BOOKING,
        bookId
    }
}
export const fetchDeleteBooking = (bookId) => async (dispatch) => {
    const response = await csrfFetch(`/api/booking/${bookId}`, {
        method: 'delete'
    });
    if (response.ok) dispatch(deleteBooking(bookId))
}

const loadBookings = (bookings) => {
    console.log('action creator:        ' + bookings)
    return {
        type: LOAD_BOOKINGS,
        payload: bookings
    }
}
export const fetchBookings = (userId) => async (dispatch) => {
    console.log(userId)
    const response = await csrfFetch(`/api/booking/${userId}`);
    const data = await response.json();

    dispatch(loadBookings(data));
    // console.log('response:      ' + response)
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
            // console.log('loading bookings' + newState)
            // console.log('here is the state: ' + newState[1].startDate);
            return newState;
        case CREATE_BOOKING:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_BOOKING:
            newState = { ...state }
            // console.log('delete a booking:      ' + newState[action])
            delete newState[action.bookId]
            return newState;
        default:
            return state;
    }
}
