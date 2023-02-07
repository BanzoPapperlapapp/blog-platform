import React, {useEffect} from 'react';
import st from './Blogs.module.css'
import {BlogDescription} from "../../components/Blog/BlogDescription";
import {useAppSelector} from "../../app/Store";
import {CircleLoader} from "../../components/Common/UI/Loaders/CircleLoader";

export const Blogs = () => {
    const blogs = useAppSelector(state => state.blogs)
    const {appStatus} = useAppSelector(state => state.app)
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
                {appStatus === 'loading'
                    ? <CircleLoader/>
                    : blogs?.map( blog => <BlogDescription key={blog.id} blog={blog}/>)
                }

                {/*{blogs?.map( blog => <BlogDescription key={blog.id} blog={blog}/>)}*/}
            </div>
            <div className={st.main__content__footer}>
                <a href={"#"} >Show more</a>
            </div>
        </>
    );
};