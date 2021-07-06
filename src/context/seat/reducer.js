import {
  CLEAR_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  SET_SELECTED_ROUTE,
  SET_SELECTED_SEAT,
} from "../types";
export const initialState = {
  selectedSeat: [],
  route: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_SEAT:
      return {
        ...state,
        selectedSeat: [...state.selectedSeat, action.selectedSeat],
      };
    case SET_SELECTED_ROUTE:
      return {
        ...state,
        route: action.route,
      };
    case REMOVE_SELECTED_SEAT:
      return {
        ...state,
        selectedSeat: state.selectedSeat.filter(
          (item) => item.id !== action.removeId
        ),
      };
    case CLEAR_SELECTED_SEAT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
