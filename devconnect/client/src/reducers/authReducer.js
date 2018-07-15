//ACTIONS FROM THE TYPES FILE
import { LOGIN_USER, SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return { foo: 'action dispatched!' };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}

export default authReducer;
