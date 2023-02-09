import React, {useEffect} from 'react';
import st from './Blogs.module.css'
import {BlogDescription} from "../../components/Blog/BlogDescription";
import {useAppSelector} from "../../app/Store";
import {CircleLoader} from "../../components/Common/UI/Loaders/CircleLoader";

export const Blogs = () => {
    const blogs = useAppSelector(state => state.blogs)
    const {appStatus} = useAppSelector(state => state.app)
    return (
        <div className={st.blogs__container}>
            {appStatus === 'loading'
                ? <CircleLoader/>
                : blogs?.map(blog => <BlogDescription key={blog.id} blog={blog}/>)
            }
        </div>
    );
};