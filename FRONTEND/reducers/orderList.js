import {ACTION_TYPES} from "../actions/actionTypes";

const initialState = {
    currentOrder: null,
    prepList: null
};

export const orderList = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CURRENT_ORDER:
            console.log(action.payload)
            return {
                currentOrder: action.payload,
                prepList: state.prepList
            };
        case ACTION_TYPES.SET_PREP_LIST:
            return {
                currentOrder: state.currentOrder,
                prepList: action.payload,
            };
        default:
            return state;
    }
}
