import {
    GET_TECHS,
    ADD_TECH,
    UPDATE_LOG,
    SET_LOADING,
    TECHS_ERROR
} from './types';


// Get Techs from Server
export const getTechs = () => async dispatch =>  {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }
}


// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}