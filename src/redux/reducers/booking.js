import {
  CLEAR_BOOKING,
  CLEAR_SELECTED_ROUTE,
  CLEAR_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  SET_BOOKING,
  SET_SELECTED_ROUTE,
  SET_SELECTED_SEAT,
} from "../../constants/ActionTypes";

const initialState = {
  departureDate: "",
  departureTime: "",
  route: "",
  selectedSeat: [],
  seat: [],
  fare: 0,
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING:
      return {
        ...state,
        departureDate: action.departureDate,
        departureTime: action.departureTime,
      };
    case SET_SELECTED_SEAT:
      return {
        ...state,
        selectedSeat: [...state.selectedSeat, action.selectedSeat],
        seat: [...state.seat, action.selectedSeat.id],
      };
    case REMOVE_SELECTED_SEAT:
      return {
        ...state,
        selectedSeat: state.selectedSeat.filter(
          (item) => item.id !== action.removeId
        ),
        seat: state.seat.filter((item) => item !== action.removeId),
      };
    case CLEAR_SELECTED_SEAT:
      return {
        ...state,
        selectedSeat: [],
        seat: [],
        route: "",
      };
    case SET_SELECTED_ROUTE:
      return {
        ...state,
        route: action.route,
      };
    case CLEAR_SELECTED_ROUTE:
      return {
        ...state,
        route: "",
      };
    case CLEAR_BOOKING:
      return initialState;
    default:
      return state;
  }
};

export default booking;
