import {ACTION_TYPES} from "./actionTypes";
import api from './api'

export const FetchAll = () => dispatch => {
    api.order().fetchAll().then(
        response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL.concat("order"),
                payload: response.data
            });
        }).catch(err => console.log(err));
}
export const Create = (order) => dispatch => {
    api.order().create(order).then(
        () => {
            dispatch({
                type: ACTION_TYPES.CREATE.concat("order"),
                payload: order
            });
        }).catch(err => console.log(err));
}
export const Update = (order) => dispatch => {
    api.order().update(order).then(
        () => {
            dispatch({
                type: ACTION_TYPES.UPDATE.concat("order"),
                payload: order
            });
        }).catch(err => console.log(err));
}
export const Delete = (id) => dispatch => {
    api.order().delete(id).then(
        () => {
            dispatch({
                type: ACTION_TYPES.DELETE.concat("order"),
                payload: id
            });
        }).catch(err => console.log(err));
}