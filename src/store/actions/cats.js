import Services from './../../API/services'
import {FETCH_CATS, SET_CATS} from "../types";

export const fetchCats = (url) => {
    return async (dispatch) => {
        const data = await Services.getResource(url)
            .catch(error => Promise.reject(error))
        dispatch({type: FETCH_CATS, payload: data})
    }
}

export const setCats = (data) => {
    return (dispatch) => {
        return dispatch({type: SET_CATS, payload: data})
    }
}