import {combineReducers} from 'redux';
import userReducer from './userReducer';
import washerSignupReducer from './washerSignupReducer.js';
import washerDashboardReducer from './washerDashboardReducer.js';

const rootReducer = combineReducers({
    userReducer,
    washerSignupReducer,
    washerDashboardReducer,
});

export default rootReducer;