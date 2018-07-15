import axios from 'axios';

//HELPER FUNCTION TO SET AUTHORIZATION HEADER WITH BEARER TOKEN
const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;
