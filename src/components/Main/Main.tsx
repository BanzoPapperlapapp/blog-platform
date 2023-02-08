import React from 'react';
import st from './Main.module.css'
import {useLocation} from "react-router-dom";


type MainPropsType = {
    children: React.ReactNode
}
export const Main = ({children}: MainPropsType) => {
    const test = useLocation();
    return (
        <main className={st.main}>
            <div className={st.main__container}>
                <div className={st.main__title}>
                    <h3>Blogs</h3>
                    {!!test.state &&<div className={st.main__subtitle}>{test.state?.name}</div>}
                </div>
                <div className={st.main__border}></div>
                <div className={st.main__content}>
                    {children}
                </div>
            </div>
        </main>

    );
};