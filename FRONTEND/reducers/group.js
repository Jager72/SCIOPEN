import {ACTION_TYPES} from "../actions/actionTypes";

const initialState = {
    groupOwner: null,
    groupSize: null,
};

export const group = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_OWNER:
            return {
                groupOwner: action.payload,
                groupSize: state.groupSize
            };
        case ACTION_TYPES.SET_SIZE:
            return {
                groupOwner: state.groupOwner,
                groupSize: action.payload,
            };
        default:
            return state;
    }
}
