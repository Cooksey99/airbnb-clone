import { csrfFetch } from "./csrf";

export const ACTIONS = {
    FIND_SPOT: 'find-spot',
    LIST_SPOTS: 'list-spots',
    CREATE_LISTING: 'spots/create-listing',
    EDIT_LISTING: 'spots/edit-listing',
    DELETE_LISTING: 'spots/delete-listing'
}

const LIST_SPOTS = 'spots/set-spots';
const FIND_SPOT = 'spots/find-spot';
const CREATE_LISTING = 'spots/create-listing';
const EDIT_LISTING = 'spots/edit-listing';
const DELETE_LISTING = 'spots/delete-listing';

const createSpot = (spot) => {
    return {
        type: CREATE_LISTING,
        payload: spot
    }
}
// receives information entered in form, as inputInfo
export const createListing = (inputInfo) => async (dispatch) => {
    console.log(inputInfo)
    const response = await csrfFetch('/api/spots', {
        method: 'post',
        header: { 'Content-Type': 'application/json'},
        body: JSON.stringify(inputInfo)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(createSpot(data));
    }
}

const editSpot = (spot) => {
    return {
        type: EDIT_LISTING,
        payload: spot
    }
}
export const editListing = (inputInfo, id) => async (dispatch) => {
    console.log(inputInfo)
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'put',
        header: { 'Content-Type': 'application/json'},
        body: JSON.stringify(inputInfo)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(editSpot(data));
    }
}

const setSpots = (spots) => {
    return {
        type: LIST_SPOTS,
        payload: spots
    }
}

const locateSpot = (spot) => {
    console.log('locate spot is working:    ' + spot)
    return {
        type: FIND_SPOT,
        spot
    }
}

export const findSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);
    if (response.ok) {
        // const data = await response.json();
        // console.log('response:      ' + response.ok)
        dispatch(locateSpot(response))
    }

}

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();

    dispatch(setSpots(data));
    return response;
};

const deleteSpot = (userId, spotId) => {
    return {
        type: DELETE_LISTING,
        spotId
    }
}
export const deleteListing = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'delete'
    });
    if (response.ok) {
        // const data = await response.json();
        dispatch(deleteSpot(spotId))
    }
}

export default function spotsReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case LIST_SPOTS:
            newState = {};
            action.payload.forEach(spot => newState[spot.id] = spot);
            return newState;
        case FIND_SPOT:
            console.log('testing final step')
            newState = {...state};
            newState[action.spot.id] = action.spot;
            return newState;
        case CREATE_LISTING:
            newState = {...state}
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_LISTING:
            newState = {...state}
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_LISTING:
            newState = {...state};
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}
