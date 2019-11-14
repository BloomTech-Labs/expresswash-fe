// import action types
import {
  CREATE_WASHER_START,
  CREATE_WASHER_SUCCESS,
  CREATE_WASHER_FAILED
} from '../actions/actionTypes.js';

// import initial State
import initialState from './initialState.js';

export default function washerSignupReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_WASHER_START: {
      const { washerSignupLoading, washerSignupError, washerSignupData } = state;
      return {
        ...state,
        washerSignupLoading: true,
      }
    }
    case CREATE_WASHER_SUCCESS: {
      return {
        ...state,
        washerSignupLoading: true,
        washerSignupData: action,
      }
    }
    case CREATE_WASHER_FAILED: {
      return {
        ...state,
        washerSignupLoading: true,
        washerSignupError: action,
      }
    }
    default: 
      return state;
  }
}