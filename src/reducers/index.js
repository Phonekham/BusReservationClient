import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

// Import custom components
import queryRoute from "./queryRoute";
import register from "./register";

const rootReducer = combineReducers({
  queryRoute,
  register,
  Intl,
});

export default rootReducer;
