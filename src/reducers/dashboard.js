import { 
    DASHBOARD_GET_DATA
    } from '../actions/types';

const DEFAULT_STATE = {
	secret: '',
	
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case DASHBOARD_GET_DATA:
			// console.log('[AuthReducer] received AUTH_SIGN_UP action');
            return { ...state, secret: action.payload,  }
        default:
            return state
		
	}
};
