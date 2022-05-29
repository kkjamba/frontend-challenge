import {FETCH_CATS, SET_CATS} from "../types";

const initialState = {
    cats: [
        {
            "breeds": [],
            "categories": [
                {
                    "id": 3,
                    "name": "funny"
                }
            ],
            "id": "8e",
            "url": "https://cdn2.thecatapi.com/images/8e.gif",
            "width": 343,
            "height": 270
        },
        {
            "breeds": [],
            "id": "1v7",
            "url": "https://cdn2.thecatapi.com/images/1v7.jpg",
            "width": 500,
            "height": 341
        },
        {
            "breeds": [],
            "id": "3oo",
            "url": "https://cdn2.thecatapi.com/images/3oo.gif",
            "width": 500,
            "height": 322
        },
        {
            "breeds": [],
            "id": "ait",
            "url": "https://cdn2.thecatapi.com/images/ait.gif",
            "width": 500,
            "height": 281
        },
        {
            "breeds": [],
            "id": "ar8",
            "url": "https://cdn2.thecatapi.com/images/ar8.jpg",
            "width": 580,
            "height": 483
        },
    ],
}

export const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCH_CATS:
        //     return {...state, cats: action.payload}
        case SET_CATS:
            return {...state, cats: action.payload}
        default:
            return state

    }
}