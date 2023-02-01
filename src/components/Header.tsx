import React from 'react';
import st from "./Header.module.css"
import {Container} from "./common/Container";
type HeaderPropsTypes = {
    title: string
}
export const Header = ({title}:HeaderPropsTypes) => {
    return (
            <header className={st.header}>
                <Container style={st.header__container}>
                    <a href="src/components/Header#" className={st.header__logo}>
                        <h1>{title}</h1>
                    </a>
                </Container>
            </header>
    );
};
