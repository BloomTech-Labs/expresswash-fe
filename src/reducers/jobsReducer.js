// import action types
import {
  CREATE_JOB_START,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAILED,
  GET_USER_JOBS_START,
  GET_USER_JOBS_SUCCESS,
  GET_USER_JOBS_FAILED,
} from "../actions/actionTypes.js";

// initial State values
const initialState = {
  load: false,
  error: "",
  jobs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // Set Work Status
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
        jobs: [...state.jobs, action.payload],
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
    case GET_USER_JOBS_START: {
      return {
        ...state,
        load: false,
        error: "",
      };
    }
    case GET_USER_JOBS_SUCCESS: {
      return {
        ...state,
        load: false,
        jobs: action.payload,
        error: "",
      };
    }
    case GET_USER_JOBS_FAILED: {
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
