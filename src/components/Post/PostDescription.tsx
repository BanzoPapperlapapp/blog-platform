import React from 'react';
import st from './PostDescription.module.css'
import def_small_img from '../../img/common/UI/empty_small.png'
import def_medium_img from '../../img/common/UI/empty_medium.png'
export const PostDescription = () => {
    return (
        <div className={st.post__item}>
            <div className={st.post__img}>
                <img src={def_medium_img} alt={'Empty image'}/>
            </div>
            <div className={st.post__body}>
                <div className={st.post__avatar}>
                    <img src={def_small_img} alt={'Empty image'}/>
                </div>
                <div className={st.post__description}>
                    <div className={st.post__title}>Let's fly into space</div>
                    <div className={st.post__text}>The best blog in our village</div>
                    <div className={st.post__date}>12.12.2022</div>
                </div>
            </div>
        </div>
    );
};