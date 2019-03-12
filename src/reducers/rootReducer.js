import { combineReducers } from 'redux'
import entriesReducer from './entriesReducers'

const rootReducer = combineReducers({
    entries: entriesReducer
});

export default rootReducer;