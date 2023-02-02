import React from 'react';
import st from './SideBarL.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faMessage} from '@fortawesome/free-solid-svg-icons'
import {Menu} from "./menu/Menu";

export const SideBarL = () => {
    return (
        <aside className={st.sideBarL}>
            <div className={st.sideBarL__container}>
                <Menu/>
            </div>
        </aside>
    );
};