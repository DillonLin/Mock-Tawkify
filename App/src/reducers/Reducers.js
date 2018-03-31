import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import  AboutYourselfReducer  from "./AboutYourselfReducer.js";

export default combineReducers({
  routing: routerReducer,
  AboutYourselfReducer
});
