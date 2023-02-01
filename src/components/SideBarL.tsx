import React from 'react';
import st from './SideBarL.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Container} from "./common/Container";
import { faList,faMessage } from '@fortawesome/free-solid-svg-icons'

export const SideBarL = () => {
    return (
        <aside className={st.sideBarL}>
            <Container style={st.sideBarL__container}>
                <nav className={st.sideBarL__menu}>
                    <ul className={st.menu__list}>
                        <li className={`${st.menu__item} ${st.active}`}>
                            <FontAwesomeIcon icon={faList} color={"#F8346B"}/>
                            <a href="#" className={st.menu__link}> Blogs</a>
                        </li>
                        <li className={st.menu__item}>
                            <FontAwesomeIcon icon={faMessage} color={"black"}/>
                            <a href="#" className={st.menu__link}>Posts</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </aside>
    );
};