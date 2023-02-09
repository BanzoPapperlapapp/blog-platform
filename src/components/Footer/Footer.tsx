import React from 'react';
import st from './Footer.module.css'
import {MainContainer} from "../Common/MainContainer";
export const Footer = () => {
    return (
        <footer>
            <MainContainer style={st.footer__container}>
                Footer
            </MainContainer>
        </footer>
    );
};
