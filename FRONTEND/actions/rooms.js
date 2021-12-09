import {ACTION_TYPES} from "./actionTypes";

export const setCurrentRoom = (roomNumber) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_CURRENT_ROOM,
        payload: roomNumber,
    })
}
export const addVisitedRoom = (roomNumber) => dispatch => {
    dispatch({
        type: ACTION_TYPES.ADD_VISITED_ROOM,
        payload: roomNumber,
    })
}