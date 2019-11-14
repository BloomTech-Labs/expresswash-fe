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
      // some action here
      console.log('we hit the washer start');
    }
    case CREATE_WASHER_SUCCESS: {
      // some action here
      console.log('we hit the washer success');
    }
    case CREATE_WASHER_FAILED: {
      // some action here
      console.log('we hit the washer failed');
    }
  }
}