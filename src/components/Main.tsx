import React from 'react';
import st from './Main.module.css'

export const Main = () => {
    return (
        <main className={st.main__container}>
                <h3 className={st.main__title}>Blogs</h3>
                <div className={st.main__border}></div>
            <div className={st.main__content}>
                <input type={"search"} placeholder={'Search...'} className={st.main__search}/>
                <select className={st.main__select}>
                    <option value="value2" selected>New blogs first</option>
                    <option value="value3">Значение 3</option>
                </select>
            </div>
        </main>

    );
};