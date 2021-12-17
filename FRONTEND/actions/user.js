import {ACTION_TYPES, USER} from "./actionTypes";
import api from "./api";

export const login = (login, pin) => dispatch => {
    api.user().login(login, pin).then(
        response => {
            if (response.request.response === "Failed") {
                dispatch({
                    type: ACTION_TYPES.LOGOUT
                })
            } else {
                dispatch({
                    type: ACTION_TYPES.LOGIN,
                    payload: response.request.response
                });
            }
        }).catch(err => console.log(err));
}
export const logout = () => dispatch => {
    dispatch({
        type: ACTION_TYPES.LOGOUT
    })
}
export const FetchAll = () => dispatch => {
    api.user().fetchAll().then(
        response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL.concat(USER),
                payload: response.data
            });
        }).catch(err => console.log(err));
}
export const Create = (user) => dispatch => {
    api.user().create(user).then(
        () => {
            dispatch({
                type: ACTION_TYPES.CREATE.concat(USER),
                payload: user
            });
        }).catch(err => console.log(err));
}
export const Update = (user) => dispatch => {
    api.user().update(user).then(
        () => {
            dispatch({
                type: ACTION_TYPES.UPDATE.concat(USER),
                payload: user
            });
        }).catch(err => console.log(err));
}
export const Delete = (id) => dispatch => {
    api.user().delete(id).then(
        () => {
            dispatch({
                type: ACTION_TYPES.DELETE.concat(USER),
                payload: id
            });
        }).catch(err => console.log(err));
}
