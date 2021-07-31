import {
  SET_SELECTED_SEAT,
  SET_SELECTED_ROUTE,
  CLEAR_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  CLEAR_SELECTED_ROUTE,
  SET_PAYMENT,
  SET_PASSENGER_INFO,
  CLEAR_BOOKING,
  SET_TOTAL,
} from "../../constants/ActionTypes";

// ** Handle User Login
export const setSelectedSeat = (selectedSeat) => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_SEAT,
      selectedSeat,
    });
  };
};

export const removeSelectedSeat = (removeId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_SELECTED_SEAT,
      removeId,
    });
  };
};

export const clearSelectedSeat = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SELECTED_SEAT,
    });
  };
};

export const setSelectedRoute = (route, fare) => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_ROUTE,
      route,
      fare,
    });
  };
};

export const setTotal = () => {
  return (dispatch) => {
    dispatch({
      type: SET_TOTAL,
    });
  };
};

export const clearSelectedRoute = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SELECTED_ROUTE,
    });
  };
};

export const clearBooking = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_BOOKING,
    });
  };
};

export const setPayment = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAYMENT,
      payload,
    });
  };
};

export const setPassengerInfo = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SET_PASSENGER_INFO,
      payload,
    });
  };
};
