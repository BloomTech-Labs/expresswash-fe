import initialState from "./initialState";
import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  NEW_CLIENT_ERROR,
  NEW_CLIENT_SUCCESS,
  GET_CLIENT_INFO_SUCCESS,
  GET_CLIENT_INFO_ERROR,
  UPDATE_CLIENT_INFO_SUCCESS,
  UPDATE_CLIENT_INFO_ERROR,
  GET_CLIENT_RATING_SUCCESS,
  GET_CLIENT_RATING_ERROR,
  ADD_CAR_START,
  ADD_CAR_SUCCESS,
  ADD_CAR_FAILED,
  DELETE_CAR_START,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_FAILED,
  CREATE_JOB_START,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAILED,
} from "../actions/actionTypes";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: null,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case NEW_CLIENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case NEW_CLIENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case GET_CLIENT_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
        info: action.payload,
        user: action.payload,
        error: false,
      };
    }
    case GET_CLIENT_INFO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case UPDATE_CLIENT_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: false,
      };
    }
    case UPDATE_CLIENT_INFO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case GET_CLIENT_RATING_SUCCESS: {
      const { rating } = action.payload;
      return {
        ...state,
        rating: action.payload,
      };
    }
    case GET_CLIENT_RATING_ERROR: {
      return {
        ...state,
      };
    }
    case ADD_CAR_START: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case ADD_CAR_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          cars: [...state.user.cars, action.payload],
        },
        error: "",
      };
    }
    case ADD_CAR_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case DELETE_CAR_START: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case DELETE_CAR_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
      };
    }
    case DELETE_CAR_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case CREATE_JOB_START: {
      return {
        ...state,
        load: true,
        error: "",
      };
    }
    case CREATE_JOB_SUCCESS: {
      return {
        ...state,
        load: false,
        error: "",
      };
    }
    case CREATE_JOB_FAILED: {
      return {
        ...state,
        load: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
