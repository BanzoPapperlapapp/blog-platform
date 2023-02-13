import React from 'react';
import st from './BlogDescription.module.css'
import img from "../../img/blogs/Vector.png";
import {BlogsApiType} from "../../api/BlogsPlatformApi";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";

type BlogDescriptionType = {
    blog: BlogsApiType
}
export const BlogDescription = ({blog}: BlogDescriptionType) => {
    const curr = useParams()
    const {id,description,websiteUrl,name} = blog

    const test = true;
    return (
        <div className={st.content__container}>
            <div className={st.content__image}>
                <img src={img} />
            </div>
            <div className={st.content__body}>
                <div className={st.content__title}>
                    {curr.id
                        ? <span>{name}</span>
                        : <Link to={`${id}`} state={{state: blog,from: 'blog'}}><h4>{name}</h4></Link>
                    }
                </div>
                <div className={st.blog__subtitle}>
                    {curr.id && <div className={st.subtitle__text}>Blog creation date: <span className={st.subtitle__date}>12.12.2022</span></div>}
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
