// import { csrfFetch } from "./csrf";

// const LOAD_SPOT = 'spot/LOAD_SPOT';
// const ADD_SPOT = 'spot/ADD_SPOT';

// const loadSpot = (spots) => {
//     return {
//         type: LOAD_SPOT,
//         payload: spots
//     }
// }
// const addSpot = (spot) => {
//     return {
//         type: ADD_SPOT,
//         payload: spot
//     }
// }

// export const getSpots = () => async dispatch => {
//     const response = await csrfFetch(`/api/`);
//     if (response.ok) {
//         const spots = await response.json();
//         dispatch(addSpot(spots))
//     }
// }
