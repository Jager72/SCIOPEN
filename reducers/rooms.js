import {ACTION_TYPES} from "../actions/actionTypes";

const initialState = {
    currentRoom:null,
    visitedRooms:[]
};

export const rooms = (state = initialState,action) => {
    switch (action.type){
        case ACTION_TYPES.SET_CURRENT_ROOM:
            return {
                currentRoom: action.payload,
                visitedRooms: state.visitedRooms
            };
        case ACTION_TYPES.ADD_VISITED_ROOM:
            return {
                currentRoom: state.currentRoom,
                visitedRooms: state.visitedRooms.concat(action.payload),
            };
        default:
            return state;
    }
}
