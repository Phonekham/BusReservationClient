import { LOGIN, LOGOUT } from "../../constants/ActionTypes";

// ** Handle User Login
export const handleLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: data,
    });
  };
};

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwtTokenBRSClient");
    dispatch({
      type: LOGOUT,
    });
  };
};
