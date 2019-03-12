// ACTION TYPES
export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
//const FETCH_ENTRIES = 'FETCH_ENTRIES';

// ACTION CREATERS
export const addEntry = (newEntry) => ({
    type: ADD_ENTRY,
    newEntry: newEntry
});

export const removeEntry = (id) => ({
    type: REMOVE_ENTRY,
    id: id
});