/*  This reducer handles entries */

// Import action types
import {
    ADD_ENTRY,
    REMOVE_ENTRY,
    CLEAR_CALENDAR,
    TOGGLE_ENTRY
} from "../actions/actions";

const entryReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ENTRY:
            return {
                ...state,
                [action.id]: {
                    person: action.payload.person,
                    time: action.payload.time,
                    task: action.payload.task
                },
                allIds: state.allIds
                    ? state.allIds.concat(action.id)
                    : state.concat(action.id)
            };
        case REMOVE_ENTRY:
            let { [action.payload]: val, ...newState } = state;
            // Filter ID from state.allIds
            const newAllIds = newState.allIds.filter(id => id === action.id);
            // override newState
            newState.allIds = newAllIds;

            return newState;
        case TOGGLE_ENTRY:
            const thisEntry = state[action.payload];
            if (thisEntry) {
                //if it still exists (hasn't been deleted)
                return {
                    ...state,
                    //action.payload is the id and key of the entry
                    [action.payload]: {
                        ...thisEntry,
                        isCompleted: !thisEntry.isCompleted
                    }
                };
            }
            return state;
        default:
            return state;
    }
};

const entriesReducer = (state = [], action) => {
    if (action.type === CLEAR_CALENDAR) {
        return [];
    } else if (typeof action.listId !== "undefined") {
        return {
            // current state...
            ...state,
            // key corresponding to the list ID
            [action.listId]: entryReducer(state[action.listId], action)
        };
    }
    return state;
};

export default entriesReducer;
