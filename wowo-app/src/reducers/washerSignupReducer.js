// import action types
import {
  CREATE_WASHER_START,
  CREATE_WASHER_SUCCESS,
  CREATE_WASHER_FAILED
} from '../actions/actionTypes.js';

// initial State values
const initialState = {
  washerSignupLoading: false,
  washerSignupError: null,
  washerSignupData: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_WASHER_START: {
      return {
        ...state,
        washerSignupLoading: true,
      }
    }
    case CREATE_WASHER_SUCCESS: {
      return {
        ...state,
        washerSignupLoading: false,
        washerSignupData: action,
      }
    }
    case CREATE_WASHER_FAILED: {
      return {
        ...state,
        washerSignupLoading: false,
        washerSignupError: action,
      }
    }
    default: 
      return state;
  }
}