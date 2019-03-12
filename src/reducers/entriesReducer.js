/*  This reducer handles entries */

// Import action types
import { ADD_ENTRY, REMOVE_ENTRY, CLEAR_CALENDAR } from '../actions/actions'

const entryReducer = (state = [], action) => {
    switch(action.type){
        case ADD_ENTRY:
            return(
                [
                    ...state,
                    action.payload
                ]
            );
        case REMOVE_ENTRY:
            return([
                ...state.slice(0, action.payload), // payload = id
                ...state.slice(action.payload + 1)
        ]);
        default:    
            return state;
    }
};

const entriesReducer = (state = [], action) => {
    if (action.type === CLEAR_CALENDAR) {
        return [];
    } else if (typeof action.listId !== 'undefined') {
        return(
            {
                // current state...
                ...state,
                // ...and append another entry with the key corresponding to the list ID, so they will be displayed at the right list
                [action.listId]: entryReducer(state[action.listId], action)
            }
        );
    }
    return state;
};

export default entriesReducer;