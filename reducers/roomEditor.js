import {ACTION_TYPES} from "../actions/actionTypes";

const initialState = {
    currentRoom:null,
    creating:false
};

export const roomEditor = (state = initialState,action) => {
    switch (action.type){
        case ACTION_TYPES.SET_CURRENT_ROOM_EDIT:
            return {
                currentRoom: action.payload,
                creating: state.visitedRooms
            };
        case ACTION_TYPES.SET_ROOM_CREATING_STATUS:
            return {
                currentRoom: state.currentRoom,
                creating: !state.creating,
            };
        default:
            return state;
    }
}
