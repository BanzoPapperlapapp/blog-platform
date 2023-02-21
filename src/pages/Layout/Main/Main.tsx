import React from 'react';
import st from './Main.module.css'
import {MainContainer} from "../../../schared/containers/1152pxContainer";
import {SideBarL} from "../SideBar/SideBarL";
import {BreadCrumbs} from "../../../widgets/BreadCrumbs/BreadCrumbs";
import {MySelect} from "../../../schared/select/MySelect";
import {MyInput} from "../../../schared/input/MyInput";
import {FiltersForBlogsAndPosts} from "../../../widgets/FiltersForBlogsAndPosts/FiltersForBlogsAndPosts";


type MainPropsType = {
    children?: React.ReactNode
}
export const Main = ({children}: MainPropsType) => {

    return (
        <main className={st.main}>
            <MainContainer style={st.main__container}>
                <SideBarL/>
                <section className={st.content}>
                    <div className={st.content__container}>
                        <div className={st.content__header}>
                            <BreadCrumbs />
                        </div>
                        <div className={st.content__settings}>
                            <FiltersForBlogsAndPosts/>
                        </div>
                        <div className={st.content__body}>
                            {children}
                        </div>
                    </div>
                </section>
            </MainContainer>
        </main>
    );
};