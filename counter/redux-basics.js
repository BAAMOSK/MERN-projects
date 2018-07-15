const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer takes two arguments STATE and ACTION
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'ADD': 
            return {...state, counter: state.counter + action.value};
        default:
            return state;
    }
}

//Store must pass REDUCER
const store = createStore(rootReducer);

//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Action
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD', value: 10 });

