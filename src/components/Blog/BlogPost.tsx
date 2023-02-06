import React from 'react';
import st from './BlogPost.module.css'
import img from '../../img/blogs/Vector.png'
export const BlogPost = () => {
    return (
        <div className={st.post__container}>
            <div className={st.post__header}>
                    <img src={img} alt={'Blog image'}/>
            </div>
            <div className={st.post__body}>
                <h4 className={st.post__title}>Let's fly into space</h4>
                <div className={st.post__preview}>Lorem ipsum dolor sit amet, consectet adipiscing elit...</div>
                <div className={st.post__date}>12.12.2022</div>
            </div>
        </div>
    );
};
