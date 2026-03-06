import { createStore, applyMiddleware } from "redux";
import { studyReducer } from "./reducers/studyReducer";
import logger from "./middleware/logger";

const store = createStore(studyReducer, applyMiddleware(logger));

export default store;
