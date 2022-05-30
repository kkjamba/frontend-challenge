import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    const setActive = ({isActive}) => {
        const linkClasses = [s.headerButton]
        if (isActive) linkClasses.push(s.active)
        return linkClasses.join(' ')
    }

    return (
        <div className={s.header}>
            <div className={s.container}>
                <NavLink className={setActive} to='/frontend-challenge/'>Все котики</NavLink>
                <NavLink className={setActive} to='/frontend-challenge/favorite'>
                    Любимые котики
                </NavLink>
            </div>
        </div>
    );
};

export default Header;