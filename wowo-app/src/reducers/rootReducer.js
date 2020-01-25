import {combineReducers} from 'redux';
import userReducer from './userReducer';
import washerSignupReducer from './washerSignupReducer.js';
import washerDashboardReducer from './washerDashboardReducer.js';
// import {reducer as formReducer} from 'redux-form';
import authReducer from './auth'
import dashboardReducer from './dashboard'

const rootReducer = combineReducers({
    userReducer,
    washerSignupReducer,
    washerDashboardReducer,



    
    // form: formReducer,
    auth:authReducer,
    dash: dashboardReducer

});

export default rootReducer;