import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';
import logo from '../../images/logo.png';

const Logo = function () {
    return (
        <div className={style.logo}>
            <NavLink to="/trends">
                <img src={logo} alt="logo" />
            </NavLink>
            <NavLink to="/trends">Tik-Tuk</NavLink>
        </div>
    );
};

export default Logo;
