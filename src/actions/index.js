import * as types from "../constants/ActionTypes";
import store from "../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN,
});
