import initialState from './initialState';
import {
    GET_USER, 
    GET_USERS,
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from '../actions/actionTypes';

export default function userReducer(state = initialState, action) {
    switch(action.type) {

        case GET_USER:
            // Get user action
        case GET_USERS:
            //Get users action
        case LOGGING_IN: {
            return {
                ...state,
                loggingIn: true
            }
        }
      
        case LOGIN_SUCCESS: {
            return {
            ...state,
            loggingIn: false,
            user: action.payload,
            error: null
            }
        }
      
        case LOGIN_FAILED: {
            return {
            ...state,
            loggingIn: false,
            error: action.payload
            }
        }
        
        default: 
            return state;
    }
}