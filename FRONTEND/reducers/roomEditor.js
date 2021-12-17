import {ACTION_TYPES} from "../actions/actionTypes";
import DATA from "../modules/ClassroomManager/SampleDataRooms";

const initialState = {
    currentRoom: null,
    roomArr: DATA,
};

export const roomEditor = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.DELETE_ROOM:
            return {
                currentRoom: state.currentRoom,
                roomArr: state.roomArr.slice(0, state.roomArr.indexOf(state.roomArr.find(x => x.roomNumber === action.payload))).concat(state.roomArr.slice(state.roomArr.indexOf(state.roomArr.find(x => x.roomNumber == action.payload)) + 1))
            };
        default:
            return state;
    }
}
