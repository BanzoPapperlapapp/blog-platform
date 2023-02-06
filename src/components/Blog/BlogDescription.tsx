import React from 'react';
import st from './BlogDescription.module.css'
import img from "../../img/blogs/Vector.png";

export const BlogDescription = () => {
    const test = true;
    return (
        <div className={st.content__container}>
            <div className={st.content__image}>
                <img src={img} />
            </div>
            <div className={st.content__body}>
                <div className={st.content__title}>
                    <h4>The best blog in our village</h4>
                </div>
                <div className={st.blog__subtitle}>
                    {test && <div className={st.subtitle__text}>Blog creation date: <span className={st.subtitle__date}>12.12.2022</span></div>}
                    <div className={st.subtitle__website}>Website: <a href={'https://www.youtube.com/'}>https://www.youtube.com/</a></div>
                </div>
                <div className={st.blog__text}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
            </div>
        </div>
    );
};