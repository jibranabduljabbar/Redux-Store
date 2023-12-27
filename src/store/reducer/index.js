import { combineReducers } from "redux";
import admin_reducer from "./admin_reducer";
import registerusers_reducer from "./registerusers_reducer";

export default combineReducers({
    admin: admin_reducer,
    register: registerusers_reducer,
})