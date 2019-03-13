// ACTION TYPES
export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const ADD_PERSON = 'ADD_PERSON';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const CLEAR_CALENDAR = "CLEAR_CALENDAR";
export const TOGGLE_ENTRY = 'TOGGLE_ENTRY';

// ACTION CREATERS
export const addEntry = (entryToAdd, entryId, listId) => 
{
    return({
        type: ADD_ENTRY,
        payload: entryToAdd,
        id: entryId,
        listId: listId
    });
};

export const removeEntry = (idToRemove, listId) => ({
    type: REMOVE_ENTRY,
    payload: idToRemove,
    listId: listId
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

export const toggleEntry = (idToToggle, listId) => ({
    type: TOGGLE_ENTRY,
    payload: idToToggle,
    listId: listId
});