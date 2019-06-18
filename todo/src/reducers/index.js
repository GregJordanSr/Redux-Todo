import { ADD_TODO }from '../actions'

const initialState = {
    todos: []
};


// Reducer

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...action.payload]
            };
        default: return state;
    }
};
