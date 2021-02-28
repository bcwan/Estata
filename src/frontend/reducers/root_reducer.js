import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import messageReducer from "./messages_reducer";

const rootReducer =  combineReducers({
  auth: authReducer,
  messages: messageReducer,
});

export default rootReducer;