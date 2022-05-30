import React from 'react';
import s from './CatCard.module.css'
import {useSelector} from "react-redux";

const CatCard = ({cat, onLikeButtonClick}) => {
    const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)
    const isLiked = favoriteCats.some(c => c.id === cat.id)

    const onLikeButtonClickHandler = () => {
        onLikeButtonClick(cat)
    }

    return (
        <div className={`${s.catCard}`}>
            <img
                className={s.catImage}
                src={cat.url}
                alt="img"
            />
            <button
                className={isLiked ? s.likeButtonFilled : s.likeButton}
                onClick={onLikeButtonClickHandler}
            />
        </div>
    );
};

export default CatCard;