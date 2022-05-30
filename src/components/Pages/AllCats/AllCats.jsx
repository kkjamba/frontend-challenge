import React, {useEffect, useState} from 'react';
import s from './AllCats.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchCats, setCats} from "../../../store/actions/cats";
import {setFavoriteCats} from "../../../store/actions/favoriteCats";
import CatCard from "../../CatCard/CatCard";

const AllCats = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats.cats)
    const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)

    const fetchNewCats = () => {
        dispatch(fetchCats(`&page=${currentPage}`))
        setCurrentPage(prevState => prevState + 1)
    }

    useEffect(() => {
        if (fetching) {
            fetchNewCats()
        }
    }, [fetching])

    useEffect(() => {
        dispatch(setCats(cats))
        setFetching(false)
    }, [cats])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    const addToFavorite = (cat) => {
        const isLiked = favoriteCats.some(c => c.id === cat.id)
        if (!isLiked) {
            dispatch(setFavoriteCats([...favoriteCats, cat]))
        } else {
            dispatch(setFavoriteCats(favoriteCats.filter(item => item.id !== cat.id)))
        }
    }
    return (

        <div className={s.cats}>
            {cats.map(cat => <CatCard
                key={cat.id}
                cat={cat}
                onLikeButtonClick={addToFavorite}
            />)}
            <div className={s.loading}>
                {currentPage === 1
                    ? 'Загружаем котиков...'
                    : '...Загружаем еще котиков...'}</div>
        </div>);

}

export default AllCats;