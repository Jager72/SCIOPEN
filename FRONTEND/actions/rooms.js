import {ACTION_TYPES, ROOM} from "./actionTypes";
import api from "./api";

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
export const FetchAll = () => dispatch => {
    api.room().fetchAll().then(rooms => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL.concat(ROOM),
            payload: rooms.data,
        })
    }).catch(err => console.log(err));
}
export const Create = (room) => dispatch => {
    api.room().create(room).then(room => {
        dispatch({
            type: ACTION_TYPES.CREATE.concat(ROOM),
            payload: room,
        })
    }).catch(err => console.log(err));
}
export const Update = (room) => dispatch => {
    api.room().update(room).then(room => {
        dispatch({
            type: ACTION_TYPES.UPDATE.concat(ROOM),
            payload: room,
        })
    }).catch(err => console.log(err));
}
export const Delete = (room) => dispatch => {
    api.room().delete(room).then(room => {
        dispatch({
            type: ACTION_TYPES.DELETE.concat(ROOM),
            payload: room,
        })
    }).catch(err => console.log(err));
}
