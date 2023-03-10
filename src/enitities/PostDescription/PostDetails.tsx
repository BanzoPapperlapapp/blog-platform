import React from 'react';
import st from './PostDetails.module.css'
import def_small_img from '../../img/common/UI/empty_small.png'
import def_medium_img from '../../img/common/UI/empty_medium.png'
import {PostApiType} from "../../api/BlogsPlatformApi";
import {Link} from "react-router-dom";

type PostDescriptionPropsType = {
    post: PostApiType
}
export const PostDescription = ({post}: PostDescriptionPropsType) => {
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
                    <div className={st.post__title}><Link to={`${post.id}`} state={{state: post}}>{post.title}</Link></div>
                    <div className={st.post__text}>{post.content}</div>
                    <div className={st.post__date}>12.12.2022</div>
                </div>
            </div>
        </div>
    );
};