import {ACTION_TYPES} from "./actionTypes";

export const deleteRoom = (roomNumber) => dispatch => {
    dispatch({
        type: ACTION_TYPES.DELETE_ROOM,
        payload: roomNumber,
    })
}