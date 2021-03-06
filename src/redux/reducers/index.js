import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

// Import custom components
import queryRoute from "./queryRoute";
import register from "./register";
import auth from "./auth";
import booking from "./booking";
import payBooking from "./payBooking";
const rootReducer = combineReducers({
  queryRoute,
  register,
  auth,
  booking,
  payBooking,
  Intl,
});

export default rootReducer;
