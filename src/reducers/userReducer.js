import initialState from "./initialState";
import {
  GET_USER,
  GET_USERS,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  NEW_CLIENT_ERROR,
  NEW_CLIENT_SUCCESS,
  GET_CLIENT_INFO_SUCCESS,
  GET_CLIENT_INFO_ERROR,
  GET_CLIENT_RATING_SUCCESS,
  GET_CLIENT_RATING_ERROR
} from "../actions/actionTypes";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      // Get user action
      break;
    case GET_USERS:
      break;
    //Get users action
    case LOGGING_IN: {
      return {
        ...state,
        loggingIn: true
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        user: action.payload,
        error: null
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loggingIn: false,
        error: action.payload
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
    case GET_CLIENT_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
        info: action.payload
        // error: action.payload
      };
    }
    case GET_CLIENT_INFO_ERROR: {
      return {
        ...state
        // loading: false
        // error: action.payload
      };
    }
    case GET_CLIENT_RATING_SUCCESS: {
      const { rating } = action.payload;
      return {
        ...state,
        rating: action.payload
      };
    }
    case GET_CLIENT_RATING_ERROR: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
