import React, {useEffect} from 'react';
import st from './Blog.module.css'
import img from '../../img/blogs/Vector.png'
import {BlogDescription} from "../../components/Blog/BlogDescription";
import {BlogPost} from "../../components/Blog/BlogPost";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/Store";
import {setBlogFC} from "../../store/BlogReducer";


export const Blog = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const blog = useAppSelector(state => state.blog)
    useEffect(()=> {
        id && dispatch(setBlogFC(id))
    },[id])
    return (
        <>
            <div className={st.main__content__roadmap}>
                <a href={"#"}>Back to blogs</a>
            </div>
            <div className={st.main__content__head}>
                <img src={img} alt={"Blogs image"}/>
            </div>
            <div className={st.main__content__body}>
                <BlogDescription blog={blog}/>
                <div className={st.blog__posts__container}>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                </div>
            </div>
            <div className={st.main__content__footer}>
                <a href={"#"} >Show more</a>
            </div>
        </>
    );
};
