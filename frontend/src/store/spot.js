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

const locateSpot = (spot) => {
    return {
        type: FIND_SPOT,
        spot
    }
}

export const findSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(locateSpot(data))
    }

}

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();

    dispatch(setSpots(data));
    return response;
};

const sortList = (list) => {
    return list.sort((a, b) => a - b).map(spot => spot.id)
}

export default function spotsReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case SET_SPOTS:
            newState = {};
            action.payload.forEach(spot => newState[spot.id] = spot);
            return newState;
        case FIND_SPOT:
            newState = {...state};
            newState[action.spot.id] = action.spot;
            return newState;
        default:
            return state;
    }
}
