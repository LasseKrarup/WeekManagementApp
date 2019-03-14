import { combineReducers } from "redux";
import listReducer from "./listReducer";
import personsReducer from "./personsReducer";
import entriesReducer from "./entriesReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    lists: listReducer,
    entries: entriesReducer,
    persons: personsReducer,
    isModalVisible: modalReducer
});

export default rootReducer;
