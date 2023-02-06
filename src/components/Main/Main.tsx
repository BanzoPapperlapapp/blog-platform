import React from 'react';
import st from './Main.module.css'


type MainPropsType = {
    children: React.ReactNode
}
export const Main = ({children}: MainPropsType) => {
    return (
        <main className={st.main__container}>
            <h3 className={st.main__title}>Blogs</h3>
            <div className={st.main__border}></div>
            <div className={st.main__content}>
                {children}
            </div>
        </main>

    );
};