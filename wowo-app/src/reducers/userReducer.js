import initialState from "./initialState";
import {
  GET_USER,
  GET_USERS,
  LOADING,
  NEW_CLIENT_ERROR,
  NEW_CLIENT_SUCCESS
} from "../actions/actionTypes";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
    // Get user action
    case GET_USERS:
    //Get users action
    case LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case NEW_CLIENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false
      };
    }
    case NEW_CLIENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
