import {combineReducers} from "redux";
import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    tasks: tasksReducer,
    user: userReducer,
    errors: errorReducer
});