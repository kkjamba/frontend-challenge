import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFavoriteCats} from "../../../store/actions/favoriteCats";
import CatCard from "../../CatCard/CatCard";
import s from './FavoriteCats.module.css'

const FavoriteCats = () => {
    const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)
    const dispatch = useDispatch()

    function removeFromFavorite(cat) {
        dispatch(setFavoriteCats(favoriteCats.filter(item => item.id !== cat.id)))
    }

    useEffect(() => {
        localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats))
    }, [favoriteCats])

    if(favoriteCats)
    return (
        <div className={s.cats}>
            {
                favoriteCats.length
                ? favoriteCats.map(cat => <CatCard
                        key={cat.id}
                        cat={cat}
                        onLikeButtonClick={removeFromFavorite}
                    />)
                    : <h3>У вас еще нет любимых котиков :c</h3>
            }
        </div>
    );
};

export default FavoriteCats;