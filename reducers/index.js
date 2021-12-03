import {combineReducers} from 'redux';
import {user} from "./user";
import { rooms } from './rooms';

export const reducers = combineReducers({
    user,
    rooms
})
