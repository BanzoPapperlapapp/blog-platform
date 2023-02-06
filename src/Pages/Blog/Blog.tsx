import React, {useEffect} from 'react';
import st from './Blog.module.css'
import img from '../../img/blogs/Vector.png'
import {BlogDescription} from "../../components/Blog/BlogDescription";
import {BlogPost} from "../../components/Blog/BlogPost";
import {useParams} from "react-router-dom";
import axios from 'axios';
const settings = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const instance = axios.create({
    baseURL: 'https://bloggers-chi.vercel.app/',
    ...settings
})
export const Blog = () => {
    const {id} = useParams()
    useEffect(()=>{
        instance.get('blogs/63d6e5c77dd50ba749a53d4f')
            .then((res)=>{console.log(res)})
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
                <BlogDescription/>
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
