import {ACTION_TYPES} from "./actionTypes";

export const setCurrentUserEdit = (id) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_CURRENT_USER_EDIT,
        payload: id,
    })
}
export const setUserCreatingStatus = () => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_USER_CREATING_STATUS,
    })
}