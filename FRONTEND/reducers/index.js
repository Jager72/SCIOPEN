import {combineReducers} from 'redux';
import {user} from "./user";
import { rooms } from './rooms';
import {order} from './order';
import { roomEditor } from './roomEditor';

export const reducers = combineReducers({
    user,
    rooms,
    order,
    roomEditor,
})
