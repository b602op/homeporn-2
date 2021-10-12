import { combineReducers } from "redux";
import { changeOptions } from "./options";

const createRootReducer = () =>
  combineReducers({
    changeOptions
  });

export default createRootReducer;