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

export const Pages = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBlogTC())
    }, [])
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={'blogs'}/>}/>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"blogs"} element={<Blogs/>}/>
                <Route path={"blogs/:id"} element={<Blog/>}/>
                <Route path={"posts"} element={<Posts/>}/>
                <Route path={"posts/:id"} element={<Post/>}/>
            </Route>
        </Routes>
    );
};
