import {ACTION_TYPES,USER} from "../actions/actionTypes";

const initialState = {
    isLogged:false,
    user:{},
    users:[]
};

export const user = (state = initialState,action) => {
    switch (action.type){
        case ACTION_TYPES.LOGIN:
            return {
                isLogged:true,
                user:state.user,
                users:state.users
            };
        case ACTION_TYPES.LOGOUT:
            return {
                isLogged:false,
                user:{},
                users:[]
            };
        case ACTION_TYPES.FETCH_ALL.concat(USER):
            return {
                isLogged:state.isLogged,
                user:state.user,
                users:action.payload
            };
        case ACTION_TYPES.CREATE.concat(USER):
            return {
                isLogged:state.isLogged,
                user:state.user,
                users:state.users.push(action.payload)
            };
        case ACTION_TYPES.UPDATE.concat(USER):
            return {
                isLogged:state.isLogged,
                user:state.user,
                users:state.users.map(user => user.id === action.payload.id ? action.payload : user)
            };
        case ACTION_TYPES.DELETE.concat(USER):
            return {
                isLogged:state.isLogged,
                user:state.user,
                users:state.users.filter(user => user.id !== action.id)
            };
        default:
            return state;
    }
}
