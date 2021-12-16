import {ACTION_TYPES,ROOM} from "../actions/actionTypes";

const initialState = {
    currentRoom:null,
    visitedRooms:[],
    rooms:[]
};

export const rooms = (state = initialState,action) => {
    switch (action.type){
        case ACTION_TYPES.SET_CURRENT_ROOM:
            return {
                currentRoom: action.payload,
                visitedRooms: state.visitedRooms,
                rooms: state.rooms
            };
        case ACTION_TYPES.ADD_VISITED_ROOM:
            return {
                currentRoom: state.currentRoom,
                visitedRooms: state.visitedRooms.concat(action.payload),
                rooms: state.rooms
            };
        case ACTION_TYPES.FETCH_ALL.concat(ROOM):
            return {
                currentRoom: state.currentRoom,
                visitedRooms: state.visitedRooms,
                rooms: action.payload
            };
        case ACTION_TYPES.CREATE.concat(ROOM):
            return {
                currentRoom: state.currentRoom,
                visitedRooms: state.visitedRooms,
                rooms: state.rooms.concat(action.payload)
            };
        case ACTION_TYPES.UPDATE.concat(ROOM):
            return {
                currentRoom: state.currentRoom,
                visitedRooms: state.visitedRooms,
                rooms: state.rooms.map(room => room.id === action.payload.id ? action.payload : room)
            };
        case ACTION_TYPES.DELETE.concat(ROOM):
            return {
                currentRoom: state.currentRoom,
                visitedRooms: state.visitedRooms,
                rooms: state.rooms.filter(room => room.id !== action.payload)
            };
        default:
            return state;
    }
}
