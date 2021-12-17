import {ACTION_TYPES} from "../actions/actionTypes";

const initialState2 = {
    currentUser: null,
    creatingUser: false
};

export const userEditor = (state = initialState2, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CURRENT_USER_EDIT:
            return {
                currentUser: action.payload,
                creatingUser: state.xdddUser
            };
        case ACTION_TYPES.SET_USER_CREATING_STATUS:
            return {
                currentUser: state.currentUser,
                creatingUser: !state.creatingUser,
            };
        default:
            return state;
    }
}
