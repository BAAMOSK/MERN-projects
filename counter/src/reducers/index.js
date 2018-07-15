const initialState = {
    counter: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1}
        case 'DECREMENT':
            return {...state, counter: state.counter - 1}
        case 'ADD_VALUE':
            return {...state, counter: state.counter + action.value}
        case 'SUB_VALUE':
            return {...state, counter: state.counter - action.value}
        default:
            return state;
    }
}

export default reducer;

