import React from 'react';
import st from './Blog.module.css'
import img from '../../img/blogs/Vector.png'
import {BlogDescrption} from "../../components/Blog/BlogDescrption";
import {BlogPost} from "../../components/Blog/BlogPost";

export const Blog = () => {
    return (
        <>
            <div className={st.main__content__roadmap}>
                <a href={"#"}>Back to blogs</a>
            </div>
            <div className={st.main__content__head}>
                <img src={img} alt={"Blogs image"}/>
            </div>
            <div className={st.main__content__body}>
                <BlogDescrption/>
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
