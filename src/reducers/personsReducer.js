/*  This reducer handles state.persons */

// Import action types
import { ADD_PERSON } from '../actions/actions'

let idCount = 0;

const initialState = [
    {
        id: idCount++,
        name: 'Select a person...'
    }
]

const personsReducer = (
    state = initialState, 
    action
    ) => {
    switch(action.type) {
        case ADD_PERSON:
            return [
                ...state,
                {
                    id: idCount,
                    name: action.payload
                }
            ];
        default: 
            return state;
    }
}

export default personsReducer;