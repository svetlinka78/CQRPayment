import rootReducer from "../reducers/rootReducer";
//Redux Thunk middleware allows you to write action creators that return a function
//instead of an action. The thunk can be used to delay the dispatch of an action,
//or to dispatch only if a certain condition is met.
//The inner function receives the store methods dispatch and getState as parameters.
//A thunk is a function that wraps an expression to delay its evaluation.
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
