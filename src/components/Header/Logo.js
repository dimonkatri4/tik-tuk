import React from 'react'
import style from "./logo.module.css"
import logo from "../../images/logo.png"
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={style.logo}>
            <NavLink to="/" >
                <img src={logo}/>
            </NavLink>
        </div>
    )
}

export default Logo