import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import tokenReducer from "./tokenReducer";

const reducers = combineReducers({
    token : tokenReducer,
    tasks : taskReducer
})

export default reducers;