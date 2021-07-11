import jwtDecode from "jwt-decode";

import { LOGIN, LOGOUT } from "../../constants/ActionTypes";

const initialState = {
  userData: null,
};

if (localStorage.getItem("jwtTokenBRSClient")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtTokenBRSClient"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtTokenBRSClient");
  } else {
    initialState.userData = decodedToken;
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGOUT:
      const obj = { ...action };
      delete obj.type;
      return { ...state, userData: {}, ...obj };
    default:
      return state;
  }
};

export default authReducer;
