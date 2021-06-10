import { SET_QUERY_ROUTE, CLEAR_QUERY_ROUTE } from "../types";
export const initialState = {
  route: "",
  departureDate: "",
  seatQty: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_QUERY_ROUTE:
      return {
        ...state,
        route: action.route,
        departureDate: action.departureDate,
        seatQty: action.seatQty,
      };
    case CLEAR_QUERY_ROUTE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
