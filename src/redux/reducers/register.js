import { SET_USER, CLEAR_USER } from "../../constants/ActionTypes";

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
  password: "",
  confirmPassword: "",
  email: "",
  phone: "",
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.username,
        firstname: action.firstname,
        lastname: action.lastname,
        password: action.password,
        confirmPassword: action.confirmPassword,
        email: action.email,
        phone: action.phone,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default register;
