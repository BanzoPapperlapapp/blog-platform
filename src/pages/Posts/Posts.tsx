import React, {useEffect} from 'react';
import {PostDescription} from "../../enitities/PostDescription/PostDetails";
import st from './Posts.module.css'
import {useAppDispatch, useAppSelector} from "../../app/store/Store";
import {getBlogPostsTC, getPostsTC} from "../../app/store/PostsReducer";
import {CircleLoader} from "../../schared/loaders/CircleLoader";


type PostsPropsType = {
    id?: string | null
}
export const Posts = ({id}:PostsPropsType) => {
    const {appStatus} = useAppSelector(state => state.app)
    const posts = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()
    useEffect(() => {
        id
            ? dispatch(getBlogPostsTC(id))
            : dispatch(getPostsTC())
    }, [])

    return (
        <div className={st.posts_container}>
            {
                appStatus === 'loading'
                    ? <CircleLoader/>
                    : posts?.map(p => <PostDescription key={p.id} post={p}/>)
            }

        </div>
    );
};