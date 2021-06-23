import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

// Import custom components
import queryRoute from "./queryRoute";

const rootReducer = combineReducers({
  queryRoute,
  Intl,
});

export default rootReducer;
