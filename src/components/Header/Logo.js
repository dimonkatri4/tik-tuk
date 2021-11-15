import React from 'react'
import style from "./logo.module.css"
import logo from "../../images/logo.png"

const Logo = () => {
    return (
        <div className={style.logo}>
            <a href="/">
                <img src={logo}/>
            </a>
        </div>
    )
}

export default Logo