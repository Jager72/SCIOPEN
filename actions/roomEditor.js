import {ACTION_TYPES} from "./actionTypes";

export const setCurrentRoomEdit = (roomNumber) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_CURRENT_ROOM_EDIT,
        payload: roomNumber,
    })
}
export const setRoomCreatingStatus = () => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_ROOM_CREATING_STATUS,
    })
}