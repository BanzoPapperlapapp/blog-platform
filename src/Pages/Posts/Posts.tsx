import React, {useEffect} from 'react';
import {PostDescription} from "../../components/Post/PostDescription";
import st from './Posts.module.css'
import {useAppDispatch, useAppSelector} from "../../app/Store";
import {getBlogPostsTC, getPostsTC} from "../../store/PostsReducer";
import {CircleLoader} from "../../components/Common/UI/Loaders/CircleLoader";


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
    console.log(posts)
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