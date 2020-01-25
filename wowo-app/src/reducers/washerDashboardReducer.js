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
    WASHER_GET_RATING_FAILED
  } from '../actions/actionTypes.js';
  
  // initial State values
const initialState = {
    washerDashWorkStatusLoading: false,
    washerDashWorkStatusError: null,
    washerDashWorkStatusData: [],
    washerDashWashCountLoading: false,
    washerDashWashCountError: null,
    washerDashWashCountData: [],
    washerDashRatingLoading: false,
    washerDashRatingError: null,
    washerDashRatingData: []
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
    // Set Work Status
      case WASHER_SET_WORK_STATUS_START: {
        return {
          ...state,
          washerDashWorkStatusLoading: true,
        }
      }
      case WASHER_SET_WORK_STATUS_SUCCESS: {
        return {
          ...state,
          washerDashWorkStatusLoading: false,
          washerDashWorkStatusData: action.payload,
        }
      }
      case WASHER_SET_WORK_STATUS_FAILED: {
        return {
          ...state,
          washerDashWorkStatusLoading: false,
          washerDashWorkStatusError: action,
        }
      }
      // Set Work Status
      case WASHER_GET_WORK_STATUS_START: {
        return {
          ...state,
          washerDashWorkStatusLoading: true,
        }
      }
      case WASHER_GET_WORK_STATUS_SUCCESS: {
        return {
          ...state,
          washerDashWorkStatusLoading: false,
          washerDashWorkStatusData: action.payload.data[0],
        }
      }
      case WASHER_GET_WORK_STATUS_FAILED: {
        return {
          ...state,
          washerDashWorkStatusLoading: false,
          washerDashWorkStatusError: action,
        }
      }
      // Wash Count
      case WASHER_GET_WASH_COUNT_START: {
        return {
          ...state,
          washerDashWashCountLoading: true,
        }
      }
      case WASHER_GET_WASH_COUNT_SUCCESS: {
        return {
          ...state,
          washerDashWashCountLoading: false,
          washerDashWashCountData: action.payload.data,
        }
      }
      case WASHER_GET_WASH_COUNT_FAILED: {
        return {
          ...state,
          washerDashWashCountLoading: false,
          washerDashWashCountError: action,
        }
      }
      // Washer Rating
      case WASHER_GET_RATING_START: {
        return {
          ...state,
          washerDashRatingLoading: true,
        }
      }
      case WASHER_GET_RATING_SUCCESS: {
        return {
          ...state,
          washerDashRatingLoading: false,
          washerDashRatingData: action.payload.data,
        }
      }
      case WASHER_GET_RATING_FAILED: {
        return {
          ...state,
          washerDashRatingLoading: false,
          washerDashRatingError: action,
        }
      }
      default: 
        return state;
    }
  }