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
        case ACTION_TYPES.CREATE.concat("order"):
            return {
                list: [...state.list, action.payload]
            }
        case ACTION_TYPES.UPDATE.concat("order"):
            return {
                list: [...state.list.map(item => item.id === action.payload.id ? action.payload : item)]
            }
        case ACTION_TYPES.DELETE.concat("order"):
            return {
                list: [...state.list.filter(item => item.id !== action.payload)]
            }
        default:
            return state;
    }
}
