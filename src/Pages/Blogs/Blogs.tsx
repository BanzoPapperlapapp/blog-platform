import React from 'react';
import st from './Blogs.module.css'
import {BlogDescrption} from "../../components/Blog/BlogDescrption";

export const Blogs = () => {
    return (
        <>
            <div className={st.main__content__head}>
                <input type={"search"} placeholder={'Search...'} className={st.main__search}/>
                <select className={st.main__select}>
                    <option value="value2" selected>New blogs first</option>
                    <option value="value3">Old blogs first</option>
                    <option value="value4">A to Z</option>
                    <option value="value5">Z to A</option>

                </select>
            </div>
            <div className={st.main__content__body}>
                <BlogDescrption/>
                <BlogDescrption/>
                <BlogDescrption/>
            </div>
            <div className={st.main__content__footer}>
                <a href={"#"} >Show more</a>
            </div>
        </>
    );
};