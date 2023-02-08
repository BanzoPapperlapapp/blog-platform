import React, {useEffect} from 'react';
import st from './Blog.module.css'
import img from '../../img/blogs/Vector.png';
import {BlogDescription} from "../../components/Blog/BlogDescription";
import {BlogPost} from "../../components/Blog/BlogPost";
import {Link, To, useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/Store";
import {setBlogAC, setBlogFC} from "../../store/BlogReducer";
import {BlogsApiType} from "../../api/BlogsPlatformApi";



export const Blog = () => {
    const dispatch = useAppDispatch()
    const blog = useAppSelector(state => state.blog)
    const blogTemp:BlogsApiType = useLocation().state

    useEffect(()=> {
        dispatch(setBlogAC(blogTemp))
    },[blogTemp.id])

    return (
        <>
            <div className={st.main__content__roadmap}>
                <Link to={-1 as To}>Back to blogs</Link>
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
