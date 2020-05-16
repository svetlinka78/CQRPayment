import { combineReducers } from "redux";
import repositoryReducer from "./repositoryReducers";
import errorHandlerReducer from "./errorHandlerReducer";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  repository: repositoryReducer,
  error: errorHandlerReducer,
  repUser: userReducers,
});

export default rootReducer;
