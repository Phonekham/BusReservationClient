import {
  CLEAR_PAY_BOOKING,
  SET_PAY_BOOKING,
} from "../../constants/ActionTypes";

export const setPayBooking = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAY_BOOKING,
      payload,
    });
  };
};

export const clearPayBooking = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PAY_BOOKING,
    });
  };
};
