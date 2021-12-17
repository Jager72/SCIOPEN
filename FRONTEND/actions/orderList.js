import {ACTION_TYPES} from "./actionTypes";
import api from "./api";

export const setCurrentOrder = (orderId) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_CURRENT_ORDER,
        payload: orderId,
    })
}
export const setPrepList = (list) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_PREP_LIST,
        payload: list,
    })
}