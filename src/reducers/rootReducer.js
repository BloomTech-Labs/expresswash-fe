import { combineReducers } from "redux";
import userReducer from "./userReducer";
import washerSignupReducer from "./washerSignupReducer.js";
import washerDashboardReducer from "./washerDashboardReducer.js";
import jobsReducer from "./jobsReducer";
import authReducer from "./auth";
import dashboardReducer from "./dashboard";

const rootReducer = combineReducers({
  userReducer,
  jobsReducer,
  washerSignupReducer,
  washerDashboardReducer,

  auth: authReducer,
  dash: dashboardReducer,
});

export default rootReducer;
