import {SET_FAVORITE_CATS} from "../types";


export const setFavoriteCats = (data) => {
    return (dispatch) => {
        return dispatch({type: SET_FAVORITE_CATS, payload: data})
    }
}