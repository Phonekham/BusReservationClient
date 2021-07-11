import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

// Import custom components
import queryRoute from "./queryRoute";
import register from "./register";
import auth from "./auth";

const rootReducer = combineReducers({
  queryRoute,
  register,
  auth,
  Intl,
});

export default rootReducer;
