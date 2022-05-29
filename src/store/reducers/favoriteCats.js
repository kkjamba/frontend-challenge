import {SET_FAVORITE_CATS} from "../types";

const initialState = {
    favoriteCats: JSON.parse(localStorage.getItem('favoriteCats')) || []
}

export const favoriteCatsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_FAVORITE_CATS:
            return {...state, favoriteCats: action.payload}
        default:
            return state
    }
}