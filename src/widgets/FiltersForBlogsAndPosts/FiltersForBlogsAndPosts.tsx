import React from 'react';
import {useLocation} from "react-router-dom";
import {MyInput} from "../../schared/input/MyInput";
import {MySelect, MySelectOptionsType} from "../../schared/select/MySelect";
import st from './FiltersForBlogsAndPosts.module.css'

export const FiltersForBlogsAndPosts = () => {
    const location = useLocation()

    let options: MySelectOptionsType[] = []
    if (location.pathname === '/blogs') {
        options = [
            {value: 'FIFO', label: 'New blogs first'},
            {value: 'LIFO', label: 'Old blogs first'},
            {value: 'AZ', label: 'A to Z'},
            {value: 'ZA', label: 'Z to A'},
        ]
    }
    if (location.pathname === '/posts') {
        options = [
            {value: 'AZ', label: 'A to Z'},
            {value: 'ZA', label: 'Z to A'},
        ]
    }
    return (
        <div className={st.filtersWrapper}>
            {location?.pathname === '/blogs' ? <MyInput/> : <div></div>}
            {(location?.pathname === '/blogs' || location?.pathname === '/posts') && <MySelect options={options} setSelected={() => console.log}/>}
        </div>
    );
};
