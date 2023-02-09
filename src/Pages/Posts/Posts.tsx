import React, {useEffect} from 'react';
import {PostDescription} from "../../components/Post/PostDescription";
import st from './Posts.module.css'
import {useAppDispatch, useAppSelector} from "../../app/Store";
import {getPostsTC} from "../../store/PostsReducer";
import {CircleLoader} from "../../components/Common/UI/Loaders/CircleLoader";

export const Posts = () => {
    const {appStatus} = useAppSelector(state => state.app)
    const posts = useAppSelector(state => state.posts)
    console.log(posts)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPostsTC())
    }, [])
    return (
        <div className={st.posts_container}>
            {
                appStatus === 'loading'
                    ? <CircleLoader/>
                    : posts?.map(p => <PostDescription key={p.id}/>)
            }

        </div>
    );
};