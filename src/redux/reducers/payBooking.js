import {
  CLEAR_PAY_BOOKING,
  SET_PAY_BOOKING,
} from "../../constants/ActionTypes";

const initialState = {
  paymentImage: "",
  paymentStatus: "",
  paymentDate: "",
};

const payBooking = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAY_BOOKING:
      return {
        ...state,
        paymentDate: action.payload.paymentDate,
        paymentImage: action.payload.paymentImage,
        paymentStatus: action.payload.paymentStatus,
      };
    case CLEAR_PAY_BOOKING:
      return initialState;
    default:
      return state;
  }
};

export default payBooking;
