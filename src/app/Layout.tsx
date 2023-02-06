import React from 'react';
import {Header} from "../components/Header/Header";
import {MainContainer} from "../components/Common/MainContainer";
import {SideBarL} from "../components/SideBar/SideBarL";
import {Main} from "../components/Main/Main";
import {Outlet} from "react-router-dom";
import st from './Layout.module.css'

export const Layout = () => {
    return (
        <div className={st.app}>
            <Header title={'Blogger Platform'}/>
            <MainContainer style={st.wrapper}>
                <SideBarL/>
                <Main>
                    <Outlet/>
                </Main>
            </MainContainer>
        </div>
    );
};