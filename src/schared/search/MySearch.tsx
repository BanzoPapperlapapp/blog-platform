import React from 'react';
import st from './MySearch.module.css'
export const MySearch = () => {
    return <div className={st.mySearchWrapper}><input className={st.mySearch} type={"search"} placeholder={'Поиск...'}/></div>
};

