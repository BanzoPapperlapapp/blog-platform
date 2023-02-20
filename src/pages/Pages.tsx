import React, {useEffect} from 'react';
import {useAppDispatch} from "../app/store/Store";
import {getBlogTC} from "../app/store/BlogsReducer";
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout/Layout";
import {Login} from "./Login/Login";
import {Blogs} from "./Blogs/Blogs";
import {Blog} from "./Blog/Blog";
import {Posts} from "./Posts/Posts";
import {Post} from "./Post/Post";

export const PATH = {
    BLOGS: 'blogs',
    BLOG: 'blogs/:id',
    POSTS: 'posts',
    POST: 'posts/:id',
    LOGIN: 'login',
}

export const Pages = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBlogTC())
    }, [])
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={PATH.BLOGS}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.BLOGS} element={<Blogs/>}/>
                <Route path={PATH.BLOG} element={<Blog/>}/>
                <Route path={PATH.POSTS} element={<Posts/>}/>
                <Route path={PATH.POST} element={<Post/>}/>
            </Route>
        </Routes>
    );
};
