import React from 'react';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Outlet} from "react-router-dom";
import st from './Layout.module.css'
import {Footer} from "./Footer/Footer";

export const Layout = () => {
    return (
        <div className={st.wrapper}>
            <Header/>
                <Main>
                    <Outlet/>
                </Main>
            <Footer/>
        </div>
    );
};