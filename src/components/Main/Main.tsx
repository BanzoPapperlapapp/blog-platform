import React from 'react';
import st from './Main.module.css'

import {RouteObject, useMatches, useSearchParams} from "react-router-dom";
import {useLocation, useParams} from "react-router-dom";
import {MainContainer} from "../Common/MainContainer";
import {SideBarL} from "../SideBar/SideBarL";
import {useAppSelector} from "../../app/Store";
import {NavigationRoad} from "./NavigationRoad";


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
                            <NavigationRoad />
                            {/*{description && */}
                        </div>
                        <div className={st.content__settings}>
                            <select>
                                <option value="value2" >New blogs first</option>
                                <option value="value3">Old blogs first</option>
                                <option value="value4">A to Z</option>
                                <option value="value5">Z to A</option>
                            </select>
                        </div>
                        <div className={st.content__body}>
                            {children}
                        </div>
                        {/*<div className={st.content__footer}>*/}
                        {/*    <button>Show more</button>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </MainContainer>
        </main>
    );
};