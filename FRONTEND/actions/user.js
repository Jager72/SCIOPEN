import {ACTION_TYPES} from "./actionTypes";

export const login = (login,pin) => dispatch => {
    dispatch({
        type: ACTION_TYPES.LOGIN
    })
}
export const logout = () => dispatch => {
    dispatch({
        type: ACTION_TYPES.LOGOUT
    })
}
