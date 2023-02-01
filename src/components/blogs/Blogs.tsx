import React from 'react';
import st from './Blogs.module.css'

import {Header} from "../Header";
import {SideBarL} from "../SideBarL";
import {Container} from "../common/Container";
import {Main} from "../Main";
export const Blogs = () => {
    const title = "Blogger Platform"
    return (
        <>
            <Header title={title}/>
                <Container style={st.wrapper}>
                    <SideBarL/>
                    <Main/>
                </Container>
        </>
    );
};
