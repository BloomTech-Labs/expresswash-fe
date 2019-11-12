import initialState from './initialState';
import {GET_USER, GET_USERS} from '../actions/actionTypes';

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            // Get user action
        case GET_USERS:
            //Get users action
        default: 
            return state;
    }
}