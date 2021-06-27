import {
  CLEAR_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  SET_SELECTED_SEAT,
} from "../types";
export const initialState = {
  selectedSeat: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_SEAT:
      return {
        ...state,
        selectedSeat: [...state.selectedSeat, action.selectedSeat],
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
