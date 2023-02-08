import React from 'react';
import st from "./Menu.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faMessage} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useLocation} from "react-router-dom";

export const Menu = () => {
    const page = useLocation()
    const setActive = (props:{isActive: boolean, isPending: boolean}) => props.isActive ? `${st.menu__link} ${st.active}` : st.menu__link
    return (
        <nav className={st.sideBarL__menu}>
            <ul className={st.menu__list}>
                <li className={st.menu__item}>
                    <FontAwesomeIcon icon={faList} color={page.pathname === '/' ? "#F8346B" : 'black'}/>
                    <NavLink className={setActive} to={'/'}>Blogs</NavLink>
                </li>
                <li className={st.menu__item}>
                    <FontAwesomeIcon icon={faMessage} color={page.pathname === '/posts' ? "#F8346B" : 'black'}/>
                    <NavLink className={setActive} to={'posts'}>Posts</NavLink>
                </li>
            </ul>
        </nav>
    );
};