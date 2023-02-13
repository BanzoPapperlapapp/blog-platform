import React from 'react';
import st from './NavigationRoad.module.css'
import arr_history from '../../img/common/UI/arrow_right.png'
import {RouteObject, useLocation, useMatches, useParams} from "react-router-dom";
import {useAppSelector} from "../../app/Store";
type matches = {
    data: any
    handle: {crumb: () => void}
    id: string
    params: string
    pathname: string
}
export const NavigationRoad = () => {
    const blog = useAppSelector(state => state.blog)
    const post = useAppSelector(state => state.post)
    let title = 'Page'

    const page = useLocation().pathname.split('/')
    let subTitle:null | string = null

    if(page[1] === 'blogs') {
        title = 'Blogs'
        page[2] === blog.id ? subTitle = blog.name : subTitle = ''
    }

    if(page[1] === 'posts') {
        title = 'Posts'
        page[2] === post.id ? subTitle = post.title : subTitle = ''

    }
    return (
        <>
            <div>
                <h3>{title}</h3>
            </div>
            {subTitle && <div className={st.content__subheader}>
                <img src={arr_history}/>
                {subTitle}
            </div>}
        </>
    );
};
