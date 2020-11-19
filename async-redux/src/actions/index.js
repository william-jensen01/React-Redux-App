import axios from 'axios';

export const IS_LOADING = 'IS_LOADING';
export const DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS';
export const DATA_LOAD_ERROR = 'DATA_LOAD_ERROR';

export const searchTronaldDump = (searchTerm) => (dispatch) => {
    dispatch({ type: IS_LOADING });

    const apiURL = `https://www.tronalddump.io/search/quote?query=${searchTerm}`;
    axios
        .get(apiURL, { headers: { "X-Requested-With": "XMLHttpRequest" } })
        .then((res) => {
            console.log('axios good: api result: ', res.data._embedded.quotes)
            dispatch({
                type: DATA_LOAD_SUCCESS, 
                payload: res.data._embedded.quotes
            });
        })
        .catch((err) => {
            console.log('axios bad: err: ', err.request)
            dispatch({
                type: DATA_LOAD_ERROR,
                payload: `Invalid input. Please try again.`
            });
        })
}