import {ACTION_TYPES} from "../actions/actionTypes";

const initialState = {
    isLogged:false
};

export const user = (state = initialState,action) => {
    switch (action.type){
        case ACTION_TYPES.LOGIN:
            return {
                isLogged:true
            };
        case ACTION_TYPES.LOGOUT:
            return {
                isLogged:false
            };
        default:
            return state;
    }
}
