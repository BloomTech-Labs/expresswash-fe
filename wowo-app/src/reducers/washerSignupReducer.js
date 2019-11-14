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
      return {
        // some action here
        state
      }
    }
    case CREATE_WASHER_SUCCESS: {
      return {
        // some action here
        state
      }
    }
    case CREATE_WASHER_FAILED: {
      return {
        state
        // some action here
      }
    }
    default: 
      return state;
  }
}