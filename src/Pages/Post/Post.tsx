import React, {useEffect} from 'react';
import st from './Post.module.css'
import def_img from '../../img/blogs/Vector.png'
import {useAppDispatch, useAppSelector} from "../../app/Store";
import {getPostTC, setPostAC} from "../../store/PostReducer";
import { PostApiType} from "../../api/BlogsPlatformApi";
import {Link, To, useLocation, useParams} from "react-router-dom";
import {CircleLoader} from "../../components/Common/UI/Loaders/CircleLoader";

export const Post = () => {
    const {id} = useParams()
    const localState:PostApiType = useLocation().state?.state
    const dispatch = useAppDispatch()
    const globalState = useAppSelector(state => state.post)

    useEffect(()=>{
        localState
            ? dispatch(setPostAC(localState))
            : id && dispatch(getPostTC(id))
    },[])

    return (
        <div className={st.post__container}>
            <div className={st.post__roadmap}>
                <Link to={-1 as To} state={{from: 'post'}}>Back to posts</Link>
            </div>
            {!globalState.id
                ? <CircleLoader/>
                : <>
                    <div className={st.post__head}>
                        <div className={st.blog__img}><img src={def_img}/></div>
                        <h3 className={st.blog__title}>{globalState.blogName}</h3>
                    </div>
                    <div className={st.post__body}>
                        <div className={st.post__title}>
                            <h3>{globalState.title}</h3>
                            <span>{globalState.createdAt}</span>
                        </div>
                        <div className={st.post__img}><img src={def_img}/></div>
                        <div className={st.post__text}>{globalState.content}</div>
                    </div>
                </>
            }
        </div>
    );
};