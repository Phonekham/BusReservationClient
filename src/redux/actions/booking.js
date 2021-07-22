import {
  SET_SELECTED_SEAT,
  SET_SELECTED_ROUTE,
  CLEAR_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  CLEAR_SELECTED_ROUTE,
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

export const setSelectedRoute = (route) => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_ROUTE,
      route,
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
