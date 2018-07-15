import { SET_CURRENT_USER, GET_ERRORS } from './types';
import axios from 'axios';
import jwt_Token from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const registerUser = (userData, history) => dispatch => {
   //PROMISE FROM SERVER DETERMINES IF WITHROUTER IS RUN 
    axios
        .post('/api/users/login', userData)
        //PROMISE RESOLVED
        .then(res => history.push('/'))
        //PROMISE REJECTED
        .catch(err => 
            //THUNK DISPATCHES ACTION
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const loginUser = userData => dispatch => {
    
    axios
        .post('/api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            //LOCATSTORAGE SAVES ONLY STRINGS
            //variable jwtToken => token is res.data.token
            localStorage.setItem('jwtToken', token);
            //setAuthToken assigns BEARER TOKEN || deletes BEARER TOKEN if(!token)
            setAuthToken(token);

            //PARSE AUTH TOKEN
            const decoded = jwt_Token(token);
            
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );      
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch =>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}
