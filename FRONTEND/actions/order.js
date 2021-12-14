import {ACTION_TYPES} from "./actionTypes";
import api from './api'

export const fetchAll = () => dispatch => {
    api.order().fetchAll().then(
        response => {
            //console.log(response.data);
            dispatch({
                type: ACTION_TYPES.FETCH_ALL.concat("order"),
                payload: response.data
            });
        }).catch(err => console.log(err));
}
