import React from 'react';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Outlet} from "react-router-dom";
import st from './Layout.module.css'
import {Footer} from "./Footer/Footer";
import {MyModal} from "../../schared/modal/MyModal";
import {DeletePost} from "../../enitities/DeletePost/DeletePost";
import {useAppSelector} from "../../app/store/Store";

export const Layout = () => {
    const {modal} = useAppSelector(state => state.app)
    return (
        <div className={st.wrapper}>
            <MyModal isActive={modal.show}>
                {modal.component === 'delPost' && <DeletePost/>}
            </MyModal>
            <Header/>
                <Main>
                    <Outlet/>
                </Main>
            <Footer/>
        </div>
    );
};