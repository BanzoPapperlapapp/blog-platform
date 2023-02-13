import React from 'react';
import st from './NavigationRoad.module.css'
import arr_history from '../../img/common/UI/arrow_right.png'
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../app/Store";
export const NavigationRoad = () => {
    const blog = useAppSelector(state => state.blog)
    let title = 'Page'
    let subTitle:null | string = null
    const page = useLocation().pathname.split('/')
    if(page[1] === 'blogs') title = 'Blogs'
    page[2] === blog.id ? subTitle = blog.name : subTitle = page[2]
    if(page[1] === 'posts') title = 'Posts'

    return (
        <>
            <div>
                <h3>{title}</h3>
            </div>
            {page[2] && <div className={st.content__subheader}>
                <img src={arr_history}/>
                {subTitle}
            </div>}
        </>
    );
};
