// ACTION TYPES
export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const ADD_PERSON = 'ADD_PERSON';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const CLEAR_CALENDAR = "CLEAR_CALENDAR";

// ACTION CREATERS
export const addEntry = (entryToAdd, listId) => 
{
    return({
        type: ADD_ENTRY,
        payload: entryToAdd,
        listId: listId
    });
};

export const removeEntry = (idToRemove) => ({
    type: REMOVE_ENTRY,
    payload: idToRemove
});

export const addPerson = (newName) => ({
    type: ADD_PERSON,
    payload: newName
});

export const addList = (listName) => ({
    type: ADD_LIST,
    payload: listName
})

export const removeList = (listId) => ({
    type: ADD_LIST,
    payload: listId
})

export const clearCalendar = () => ({
    type: CLEAR_CALENDAR
})