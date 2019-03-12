// Import action types
import { ADD_ENTRY, REMOVE_ENTRY } from '../actions/entryactions'


const entriesReducer = (state = [], action) => {
    switch(action){
        case ADD_ENTRY:
            return([
                ...state,
                action.payload // payload = new entry object
            ]);
        case REMOVE_ENTRY:
            return([
                ...state.slice(0, action.payload), // payload = id
                ...state.slice(action.payload + 1)
        ]);
        default:
            return state;
    }
};

export default entriesReducer;