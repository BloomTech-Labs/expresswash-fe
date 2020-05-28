// import action types
import {
  WASHER_SET_WORK_STATUS_START,
  WASHER_SET_WORK_STATUS_SUCCESS,
  WASHER_SET_WORK_STATUS_FAILED,
  WASHER_GET_WORK_STATUS_START,
  WASHER_GET_WORK_STATUS_SUCCESS,
  WASHER_GET_WORK_STATUS_FAILED,
  WASHER_GET_WASH_COUNT_START,
  WASHER_GET_WASH_COUNT_SUCCESS,
  WASHER_GET_WASH_COUNT_FAILED,
  WASHER_GET_RATING_START,
  WASHER_GET_RATING_SUCCESS,
  WASHER_GET_RATING_FAILED,
} from "../actions/actionTypes.js";

// initial State values
const initialState = {
  loading: false,
  washerDashWorkStatusError: null,
  washerDashWorkStatusData: [],
  washerDashWashCountError: null,
  washerDashWashCountData: [],
  washerDashRatingError: null,
  washerDashRatingData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // Set Work Status
    case WASHER_SET_WORK_STATUS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case WASHER_SET_WORK_STATUS_SUCCESS: {
      return {
        ...state,
        loading: false,
        washerDashWorkStatusData: action.payload,
      };
    }
    case WASHER_SET_WORK_STATUS_FAILED: {
      return {
        ...state,
        loading: false,
        washerDashWorkStatusError: action,
      };
    }
    // Set Work Status
    case WASHER_GET_WORK_STATUS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case WASHER_GET_WORK_STATUS_SUCCESS: {
      return {
        ...state,
        loading: false,
        washerDashWorkStatusData: action.payload.data[0],
      };
    }
    case WASHER_GET_WORK_STATUS_FAILED: {
      return {
        ...state,
        loading: false,
        washerDashWorkStatusError: action,
      };
    }
    // Wash Count
    case WASHER_GET_WASH_COUNT_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case WASHER_GET_WASH_COUNT_SUCCESS: {
      return {
        ...state,
        loading: false,
        washerDashWashCountData: action.payload.data,
      };
    }
    case WASHER_GET_WASH_COUNT_FAILED: {
      return {
        ...state,
        loading: false,
        washerDashWashCountError: action,
      };
    }
    // Washer Rating
    case WASHER_GET_RATING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case WASHER_GET_RATING_SUCCESS: {
      return {
        ...state,
        loading: false,
        washerDashRatingData: action.payload.data,
      };
    }
    case WASHER_GET_RATING_FAILED: {
      return {
        ...state,
        loading: false,
        washerDashRatingError: action,
      };
    }
    default:
      return state;
  }
}
