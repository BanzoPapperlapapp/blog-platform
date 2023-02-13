import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/Store";
import {getPostTC, setPostAC} from "../../store/PostReducer";
import { PostApiType} from "../../api/BlogsPlatformApi";
import {useLocation, useParams} from "react-router-dom";
import {getPostsTC} from "../../store/PostsReducer";
import {CircleLoader} from "../../components/Common/UI/Loaders/CircleLoader";

export const Post = () => {
    const {id} = useParams()
    const post:PostApiType = useLocation().state?.state
    const dispatch = useAppDispatch()
    const currPost:PostApiType = useAppSelector(state => state.post)
    useEffect(()=>{
        post
            ? dispatch(setPostAC(post))
            : id && dispatch(getPostTC(id))
    },[])

    return (
        <div>
            {currPost.id
                ? currPost.title
                : <CircleLoader/>
            }
        </div>
    );
};