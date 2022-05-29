import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFavoriteCats} from "../../../store/actions/favoriteCats";
import CatCard from "../../CatCard/CatCard";

const FavoriteCats = () => {
    const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)
    const dispatch = useDispatch()

    function removeFromFavorite(cat) {
        dispatch(setFavoriteCats(favoriteCats.filter(item => item.id !== cat.id)))
    }

    useEffect(() => {
        localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats))
    }, [favoriteCats])

    return (
        <div>
            {favoriteCats.map(cat => <CatCard
                key={cat.id}
                cat={cat}
                onLikeButtonClick={removeFromFavorite}
            />)}
        </div>
    );
};

export default FavoriteCats;