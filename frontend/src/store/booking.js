import { csrfFetch } from "./csrf";

const CREATE_BOOKING = 'booking/createBooking';

const addBooking = (booking) => {
    return {
        type: CREATE_BOOKING,
        booking
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
    }
}

export default function spotsReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case CREATE_BOOKING:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
    }
}
