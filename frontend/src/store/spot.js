import { csrfFetch } from "./csrf";

export const ACTIONS = {
    FIND_SPOT: 'find-spot',
    LIST_SPOTS: 'list-spots'
}

const SET_SPOTS = 'spots/set-spots'
const FIND_SPOT = 'spots/find-spot'

const setSpots = (spots) => {
    return {
        type: SET_SPOTS,
        payload: spots
    }
}

const findSpot = (spots) => {
    return {
        type: FIND_SPOT,
        payload: spots
    }
}

// export const findSpot = (id) => async (dispatch) => {
//     const response = await csrfFetch('/api/spots');
//     const data = await response.json();
//     await data.findByPk(id)
// }

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();

    dispatch(setSpots(data));
    return response;
};

export default function spotsReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case SET_SPOTS:
            newState = {};
            action.payload.forEach(spot => newState[spot.id] = spot);
            return newState;
        default:
            return state;
    }
}
