import React from 'react';
import st from './SideBarL.module.css'
import {SNavLink} from "../../../schared/customNavLink/SNavLink";
import {faList, faMessage} from "@fortawesome/free-solid-svg-icons";

export const SideBarL = () => {
    return (
        <aside className={st.menu}>
            <nav className={st.menu__container}>
                <ul className={st.menu__items}>
                    <li className={''}>
                        <SNavLink title={'Blogs'} to={'blogs'} icon={faList}/>
                    </li>
                    <li className={''}>
                        <SNavLink title={'Posts'} to={'posts'} icon={faMessage}/>
                    </li>
                </ul>
            </nav>
        </aside>

    );
};