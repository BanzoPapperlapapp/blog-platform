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
                <h4>Let's fly into space</h4>
                <span>Lorem ipsum dolor sit amet, consectet adipiscing elit...</span>
            </div>
        </div>
    );
};
