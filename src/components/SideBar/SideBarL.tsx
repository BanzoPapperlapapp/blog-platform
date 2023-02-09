import React from 'react';
import st from './SideBarL.module.css'
import grid_menu from '../../img/common/UI/grid_view.svg'
import list_menu from '../../img/common/UI/list.svg'
import {NavLink, useLocation} from "react-router-dom";

export const SideBarL = () => {
    const page = useLocation()
    console.log(page.pathname)
    const setActive = (props: { isActive: boolean, isPending: boolean }) => props.isActive ? st.menu__link_active : ''
    return (
        <aside className={st.menu}>
            <nav className={st.menu__container}>
                <ul className={st.menu__items}>
                    <li className={''}>
                        <img src={list_menu} alt={'blogs icon'}/>
                        <NavLink className={setActive} to={'blogs'}>Blogs</NavLink>
                    </li>
                    <li className={''}>
                        <img src={grid_menu} alt={'posts icon'}/>
                        <NavLink className={setActive} to={'posts'}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>

    );
};