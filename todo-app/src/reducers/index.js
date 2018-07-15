import { add } from '../actions';

const initialState = {
    text: 'This is the main state'    
};

function todoApp(state = initialState, action) {
    switch(action.type) {        
        case add:
            return { ...state, text: action.text };
        default:
            return state;
    }
}

export default todoApp;
