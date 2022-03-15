import {ACTION_TYPES} from "./actionTypes";

export const setOwner = (owner) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_OWNER,
        payload: owner,
    })
}
export const setSize = (size) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_SIZE,
        payload: size,
    })
}
