import React from 'react';
import st from "./Header.module.css"
import {MainContainer} from "../Common/MainContainer";
type HeaderPropsTypes = {
    title: string
}
export const Header = ({title}:HeaderPropsTypes) => {
    return (
        <header className={st.header}>
            <div className="header__container _container">
                <MainContainer style={st.header__container}>
                 <h1>Blogs Platform</h1>
                </MainContainer>
            </div>
        </header>
            // <header className={st.header}>
            //     <MainContainer style={st.header__container}>
            //         <a href="src/components/Header/Header#" className={st.header__logo}>
            //             <h1>{title}</h1>
            //         </a>
            //     </MainContainer>
            // </header>
    );
};
