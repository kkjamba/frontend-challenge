import React, {useEffect} from 'react';
import s from './AllCats.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setCats} from "../../../store/actions/cats";
import {setFavoriteCats} from "../../../store/actions/favoriteCats";
import CatCard from "../../CatCard/CatCard";

const AllCats = () => {
    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats.cats)
    const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)

    // useEffect(() => {
    //     dispatch(setCats(cats))
    // }, [cats])

    const addToFavorite = (cat) => {
        const isLiked = favoriteCats.some(c => c.id === cat.id)
        if (!isLiked) {
            dispatch(setFavoriteCats([...favoriteCats, cat]))
        } else {
            dispatch(setFavoriteCats(favoriteCats.filter(item => item.id !== cat.id)))
        }
    }
    return (
        <div>
            {cats.map(cat => <CatCard
                key={cat.id}
                cat={cat}
                onLikeButtonClick={addToFavorite}
            />)}
        </div>);

}

export default AllCats;