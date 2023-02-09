import React, {useEffect} from 'react';
import st from './Blog.module.css'
import img from '../../img/blogs/Vector.png';
import {BlogDescription} from "../../components/Blog/BlogDescription";
import {Link, To, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/Store";
import {setBlogAC} from "../../store/BlogReducer";
import {BlogsApiType} from "../../api/BlogsPlatformApi";
import {Posts} from "../Posts/Posts";



export const Blog = () => {
    const dispatch = useAppDispatch()
    const blog = useAppSelector(state => state.blog)
    const blogTemp:BlogsApiType = useLocation().state.state

    useEffect(()=> {
        dispatch(setBlogAC(blogTemp))
    },[blogTemp.id])

    return (
        <div className={st.blog__container}>
            <div className={st.main__content__roadmap}>
                <Link to={-1 as To} state={{from: 'blogs'}}>Back to blogs</Link>
            </div>
            <div className={st.main__content__head}>
                <img src={img} alt={"Blogs image"}/>
            </div>
            <div className={st.main__content__body}>
                <BlogDescription blog={blog}/>
                <Posts id={blog.id}/>
            </div>
        </div>
    );
};
