import { ADD } from './types';

//ACTION CREATORS
//ACTIONS ARE PLAIN JAVASCRIPT OBJECTS
export function add(text) {
    return {
        type: ADD,
        text
    };
};
