import React from 'react';
import st from './BlogDetails.module.css'
import img from "./ui/img/Vector.png";
import {BlogsApiType} from "../../api/BlogsPlatformApi";
import {Link} from "react-router-dom";

type BlogDescriptionType = {
    blog: BlogsApiType,
    showDate?: boolean,
    isLink?: boolean
}
export const BlogDescription = ({blog ,showDate = false, isLink = false}: BlogDescriptionType) => {

    const {id,description,websiteUrl,name} = blog

    return (
        <div className={st.content__container}>
            <div className={st.content__image}>
                <img src={img} />
            </div>
            <div className={st.content__body}>
                <div className={st.content__title}>
                    {isLink
                        ? <Link to={`${id}`} state={{state: blog,from: 'blog'}}><h4>{name}</h4></Link>
                        : <span>{name}</span>
                    }
                </div>
                <div className={st.blog__subtitle}>
                    {showDate && <div className={st.subtitle__text}>Blog creation date: <span className={st.subtitle__date}>12.12.2022</span></div>}
                    <div className={st.subtitle__website}>Website: <a href={'https://www.youtube.com/'}>{websiteUrl}</a></div>
                </div>
                <div className={st.blog__text}>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
