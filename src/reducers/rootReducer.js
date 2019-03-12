import { combineReducers } from 'redux'
import listReducer from './listReducer'
import personsReducer from './personsReducer'
import entriesReducer from './entriesReducer';

const rootReducer = combineReducers({
    lists: listReducer,
    entries: entriesReducer,
    persons: personsReducer
});

export default rootReducer;