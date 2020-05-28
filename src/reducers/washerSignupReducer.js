// import action types
import {
  CREATE_WASHER_START,
  CREATE_WASHER_SUCCESS,
  CREATE_WASHER_FAILED,
} from "../actions/actionTypes.js";

// initial State values
const initialState = {
  loading: false,
  washerSignupError: null,
  washerSignupData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_WASHER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_WASHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        washerSignupData: action.payload,
      };
    }
    case CREATE_WASHER_FAILED: {
      return {
        ...state,
        loading: false,
        washerSignupError: action,
      };
    }
    default:
      return state;
  }
}
