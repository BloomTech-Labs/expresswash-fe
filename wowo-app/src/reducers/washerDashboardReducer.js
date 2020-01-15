// import action types
import {
    WASHER_SET_WORK_STATUS_START,
    WASHER_SET_WORK_STATUS__SUCCESS,
    WASHER_SET_WORK_STATUS__FAILED,
    WASHER_GET_WASH_COUNT_START,
    WASHER_GET_WASH_COUNT__SUCCESS,
    WASHER_GET_WASH_COUNT__FAILED,
    WASHER_GET_RATING_START,
    WASHER_GET_RATING__SUCCESS,
    WASHER_GET_RATING__FAILED
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
    // Work Status
      case WASHER_SET_WORK_STATUS_START: {
        return {
          ...state,
          washerDashWorkStatusLoading: true,
        }
      }
      case WASHER_SET_WORK_STATUS__SUCCESS: {
        return {
          ...state,
          washerDashWorkStatusLoading: false,
          washerDashWorkStatusData: action,
        }
      }
      case WASHER_SET_WORK_STATUS__FAILED: {
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
      case WASHER_GET_WASH_COUNT__SUCCESS: {
        return {
          ...state,
          washerDashWashCountLoading: false,
          washerDashWashCountData: action,
        }
      }
      case WASHER_GET_WASH_COUNT__FAILED: {
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
      case WASHER_GET_RATING__SUCCESS: {
        return {
          ...state,
          washerDashRatingLoading: false,
          washerDashRatingData: action,
        }
      }
      case WASHER_GET_RATING__FAILED: {
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