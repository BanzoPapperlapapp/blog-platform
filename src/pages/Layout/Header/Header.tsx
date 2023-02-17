import React from 'react';
import st from "./Header.module.css"
import {MainContainer} from "../../../schared/containers/1152pxContainer";
import {useAppSelector} from "../../../app/store/Store";

export const Header = () => {
    const isAdmin = useAppSelector(state => state.auth)?.group === 'admin'
    return (
        <header className={st.header}>
            <div className="header__container _container">
                <MainContainer style={st.header__container}>
                    <h1>Blogs Platform</h1>
                    {isAdmin && <span>Super Admin</span>}
                </MainContainer>
            </div>
        </header>
    );
};
