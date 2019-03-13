/*  This reducer handles entries */

// Import action types
import { ADD_ENTRY, REMOVE_ENTRY, CLEAR_CALENDAR, TOGGLE_ENTRY } from '../actions/actions'

const entryReducer = (state = [], action) => {
    switch(action.type){
        case ADD_ENTRY:
            return({
                    ...state,
                    [action.id]: action.payload,
                    allIds: state.allIds ? state.allIds.concat(action.id) : state.concat(action.id)
                }
            );
        case REMOVE_ENTRY:
            const { [action.payload]: val, ...newState} = state;
            return(newState);
        case TOGGLE_ENTRY:
            const thisEntry = state[action.payload];
            if (thisEntry) { //if it still exists (hasn't been deleted)
                return(
                    {
                        ...state,
                        [action.payload]: //action.payload is the id and key of the entry
                            {...thisEntry,
                            isToggled: !thisEntry.isToggled
                            }
                        
                    }
                );
            }
            return state;
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
                // key corresponding to the list ID
                [action.listId]: entryReducer(state[action.listId], action)
            }
        );
    }
    return state;
};

export default entriesReducer;