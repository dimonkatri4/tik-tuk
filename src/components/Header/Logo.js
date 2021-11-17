import React from 'react'
import style from "./header.module.css"
import logo from "../../images/logo.png"
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={style.logo}>
            <NavLink to="/trends" >
                <img src={logo}/>
            </NavLink>
            <NavLink to="/trends" >Tik-Tuk</NavLink>
        </div>
    )
}

export default Logo