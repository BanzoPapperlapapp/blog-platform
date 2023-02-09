import React from 'react';
import {Header} from "../components/Header/Header";
import {MainContainer} from "../components/Common/MainContainer";
import {SideBarL} from "../components/SideBar/SideBarL";
import {Main} from "../components/Main/Main";
import {Outlet} from "react-router-dom";
import st from './Layout.module.css'
import {Footer} from "../components/Footer/Footer";

export const Layout = () => {
    return (
        <div className={st.wrapper}>
            <Header title={'Blogger Platform'}/>
                <Main>
                    <Outlet/>
                </Main>
            <Footer/>
        </div>
    );
};