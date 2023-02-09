import React from 'react';
import st from './SideBarL.module.css'
import grid_menu from '../../img/common/UI/grid_view.svg'
import list_menu from '../../img/common/UI/list.svg'
import grid_menu_active from '../../img/common/UI/grid_view_active.svg'
import list_menu_active from '../../img/common/UI/list_active.svg'
import {NavLink, useLocation} from "react-router-dom";

export const SideBarL = () => {
    const page = useLocation()
    const setActive = (props: { isActive: boolean, isPending: boolean }) => props.isActive ? st.menu__link_active : st.menu__link
    console.log(page.pathname)
    return (
        <aside className={st.menu}>
            <nav className={st.menu__container}>
                <ul className={st.menu__items}>
                    <li className={page.pathname === '/' ? st.menu__item_active : st.menu__item}>
                        <img src={page.pathname === '/' ? list_menu_active : list_menu} alt={'blogs icon'}/>
                        <NavLink className={setActive} to={'/'}>Blogs</NavLink>
                    </li>
                    <li className={page.pathname === '/posts' ? st.menu__item_active : st.menu__item}>
                        <img src={page.pathname === '/posts' ? grid_menu_active : grid_menu} alt={'posts icon'}/>
                        <NavLink className={setActive} to={'posts'}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
        // <aside className={st.sideBarL}>
        //     <div className={st.sideBarL__container}>
        //         <Menu/>
        //     </div>
        // </aside>
    );
};