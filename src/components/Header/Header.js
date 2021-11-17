import React from "react";
import Logo from "./Logo";
import style from "./header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";


const Header = () => {
    return <header className="headerPage">
        <Logo/>
        <div className={style.headerButtons}>
            <NavLink to="/profile" ><FontAwesomeIcon icon={faHome} /></NavLink>
            <NavLink to="/trends" ><FontAwesomeIcon icon={faTiktok} /></NavLink>
        </div>
    </header>
}

export default Header