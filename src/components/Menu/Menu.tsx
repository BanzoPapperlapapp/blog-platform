import React from 'react';
import st from "./Menu.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faMessage} from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
    return (
        <nav className={st.sideBarL__menu}>
            <ul className={st.menu__list}>
                <li className={`${st.menu__item} ${st.active}`}>
                    <FontAwesomeIcon icon={faList} color={"#F8346B"}/>
                    <a href="src/components/Menu/Menu#" className={st.menu__link}> Blogs</a>
                </li>
                <li className={st.menu__item}>
                    <FontAwesomeIcon icon={faMessage} color={"black"}/>
                    <a href="src/components/Menu/Menu#" className={st.menu__link}>Posts</a>
                </li>
            </ul>
        </nav>
    );
};