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

const locateSpot = (spot, spotId) => {
    return {
        type: FIND_SPOT,
        payload: spot,
        spotId
    }
}

export const findSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch('/api/spots');

    if (response.ok) {
        const data = await response.json();
        dispatch(locateSpot(data, spotId))

        return response;
    }

}

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();

    dispatch(setSpots(data));
    return response;
};

export default function spotsReducer(state = {}, action, spotId) {
    let newState;

    switch (action.type) {
        case SET_SPOTS:
            newState = {};
            action.payload.forEach(spot => newState[spot.id] = spot);
            return newState;
        case FIND_SPOT:
            newState = {};
            newState = action.payload.filter(spot => spot.id === spotId);
            return newState;
        default:
            return state;
    }
}
