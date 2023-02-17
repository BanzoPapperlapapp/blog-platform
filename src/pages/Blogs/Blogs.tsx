import React from 'react';
import st from './Blogs.module.css'
import {BlogDescription} from "../../enitities/BlogDescription/BlogDetails";
import {useAppSelector} from "../../app/store/Store";
import {CircleLoader} from "../../schared/loaders/CircleLoader";

export const Blogs = () => {
    const blogs = useAppSelector(state => state.blogs)
    const {appStatus} = useAppSelector(state => state.app)
    return (
        <div className={st.blogs__container}>
            {appStatus === 'loading'
                ? <CircleLoader/>
                : blogs?.map(blog => <BlogDescription key={blog.id} blog={blog} isLink/>)
            }
        </div>
    );
};