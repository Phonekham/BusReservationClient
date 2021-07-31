import {
  CLEAR_BOOKING,
  CLEAR_SELECTED_ROUTE,
  CLEAR_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  SET_BOOKING,
  SET_PASSENGER_INFO,
  SET_PAYMENT,
  SET_SELECTED_ROUTE,
  SET_SELECTED_SEAT,
  SET_TOTAL,
} from "../../constants/ActionTypes";

const initialState = {
  departureDate: "",
  departureTime: "",
  selectedSeat: [],
  seat: [],
  fare: 0,
  fullname: "",
  email: "",
  tel: "",
  totalAmount: 0,
  payNow: "",
  paymentImage: "",
  paymentStatus: "",
  paymentDate: "",
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
        departureTime: "",
        fare: 0,
      };
    case SET_SELECTED_ROUTE:
      return {
        ...state,
        departureTime: action.route,
        fare: action.fare,
      };
    case CLEAR_SELECTED_ROUTE:
      return {
        ...state,
        departureTime: "",
      };
    case SET_PAYMENT:
      return {
        ...state,
        payNow: action.payload.payNow,
        paymentDate: action.payload.paymentDate,
        paymentImage: action.payload.paymentImage,
        paymentStatus: action.payload.paymentStatus,
      };
    case SET_PASSENGER_INFO:
      return {
        ...state,
        fullname: action.payload.fullname,
        email: action.payload.email,
        tel: action.payload.tel,
      };
    case SET_TOTAL:
      return {
        ...state,
        totalAmount: state.fare * state.seat.length,
      };
    case CLEAR_BOOKING:
      return initialState;
    default:
      return state;
  }
};

export default booking;
