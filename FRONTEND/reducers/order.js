import {ACTION_TYPES} from "../actions/actionTypes";

const initialState = {
    list: []
};

export const order = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL.concat("order"):
            return {
                list: [...action.payload]
            }
        default:
            return state;
    }
}
