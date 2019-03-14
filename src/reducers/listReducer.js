import { ADD_LIST, REMOVE_LIST } from "../actions/actions";

const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
const initialState = DAYS.map((current, index) => ({
    name: current,
    id: index,
    key: index
}));

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return [...state, action.payload];
        case REMOVE_LIST: //not implemented
            return state;
        default:
            return state;
    }
};

export default listReducer;
