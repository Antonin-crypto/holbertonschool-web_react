import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import notificationsReducer from "./notifications/notificationsSlice";
import coursesReducer from "./courses/coursesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  courses: coursesReducer,
});

export default rootReducer;
