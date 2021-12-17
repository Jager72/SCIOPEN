import {combineReducers} from 'redux';
import {user} from "./user";
import { rooms } from './rooms';
import {order} from './order';
import { roomEditor } from './roomEditor';
import { userEditor } from './userEditor';
import { orderList } from './orderList';

export const reducers = combineReducers({
    user,
    rooms,
    order,
    roomEditor,
    userEditor,
    orderList,
})
