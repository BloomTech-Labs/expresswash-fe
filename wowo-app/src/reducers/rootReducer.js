import {combineReducers} from 'redux';
import userReducer from './userReducer';
import washerSignupReducer from './washerSignupReducer.js';

const rootReducer = combineReducers({
    userReducer,
    washerSignupReducer,
});

export default rootReducer;